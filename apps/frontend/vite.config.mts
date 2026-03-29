import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';
const isProd = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';

const addAlias = (isDev || isTest) && !isCI;

const alias = {
  ...(addAlias && {
    '@repro/component-library': path.resolve(__dirname, '../../packages/component-library/src'),
  }),
};

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [
    checker({ typescript: { tsconfigPath: 'tsconfig.json' } }),
    dts({ tsconfigPath: 'tsconfig.json', logLevel: 'error' }),
    react(),
  ],
  legacy: {
    inconsistentCjsInterop: true,
  },
  logLevel: 'warn',
  resolve: {
    dedupe: ['react', 'react-dom', '@emotion/react', '@mui/material'],
    alias,
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom'],
    exclude: isDev ? ['@repro/*'] : undefined,
  },
  server: {
    fs: {
      allow: isDev
        ? [
            path.resolve(__dirname),
            path.resolve(__dirname, '../../packages/component-library'),
          ]
        : undefined,
    },
  },
  build: {
    sourcemap: isProd ? false : 'inline',
    minify: isProd,
    rolldownOptions: {
      output: {
        format: 'esm',
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /node_modules[\\/](react|react-dom|react-router)/,
              priority: 10,
            },
            {
              name: 'vendor-mui',
              test: /node_modules[\\/](@mui|@emotion)/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
