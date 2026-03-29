# Rolldown dep optimizer CJS init ordering bug

## Setup

```bash
pnpm install
pnpm start:frontend
```

Open the browser URL shown in the terminal. The console will show:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'muiName')
```

## What happens

The dep optimizer pre-bundles `@mui/material` into a shared chunk (`utils-*.js`). This chunk contains both `createSvgIcon` and its init function `init_createSvgIcon`.

The icon entry file (`@mui_icons-material_KeyboardArrowDown.js`) imports `createSvgIcon` and calls it immediately at module scope — but never imports or calls `init_createSvgIcon`. So `SvgIcon` is still `undefined` when `createSvgIcon` accesses `SvgIcon.muiName`.

## Expected

`init_createSvgIcon` should be called before `createSvgIcon` is available to consumers, ensuring `SvgIcon` is initialized.

## Versions

- vite 8.0.3
- rolldown 1.0.0-rc.12
- @mui/material 6.5.0
- @mui/icons-material 6.5.0
