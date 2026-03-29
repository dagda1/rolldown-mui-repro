import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';
const isProd = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const entries = ['src/index.ts'];

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [
    checker({ typescript: { tsconfigPath: 'tsconfig.json' } }),
    dts({ tsconfigPath: 'tsconfig.json', insertTypesEntry: true, logLevel: 'error' }),
    react(),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom'],
    exclude: isDev ? ['@repro/*'] : undefined,
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', '@mui/material'],
    tsconfigPaths: true,
  },
  legacy: {
    inconsistentCjsInterop: true,
  },
  logLevel: 'warn',
  build: {
    manifest: true,
    minify: true,
    outDir: './dist/esm',
    sourcemap: isProd ? false : 'inline',
    lib: {
      entry: [...entries],
      formats: ['es'],
    },
    rolldownOptions: {
      external: [
        '@emotion/react',
        '@emotion/styled',
        /^@repro\/.*/,
        /^@mui\/.*/,
        /^@rjsf\/.*/,
        '@material-table/core',
        'material-react-table',
        'react',
        'react-dom',
        'react-router',
      ],
      input: [...entries],
      output: {
        preserveModulesRoot: 'src',
        preserveModules: true,
        dir: 'dist/esm',
        format: 'esm',
      },
    },
  },
});
