# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

React + Vite project using React 19.1.1 with rolldown-vite (7.1.14) as the build tool. This is a minimal setup with HMR and ESLint configured for React development.

## Development Commands

### Start Development Server
```powershell
npm run dev
```
Starts Vite dev server with hot module replacement (HMR).

### Build for Production
```powershell
npm run build
```
Creates optimized production build in `dist/` directory.

### Lint Code
```powershell
npm run lint
```
Runs ESLint on all JavaScript files.

### Preview Production Build
```powershell
npm run preview
```
Locally preview the production build.

## Architecture

### Build System
- **Vite (rolldown-vite)**: Uses a custom Vite build that leverages Rolldown for faster builds
- **React Plugin**: Uses `@vitejs/plugin-react` with Babel for Fast Refresh
- Entry point: `index.html` which loads `/src/main.jsx`

### Source Structure
- `src/main.jsx`: Application entry point, renders `<App />` in StrictMode
- `src/App.jsx`: Main application component
- `src/index.css`: Global styles
- `src/App.css`: Component-specific styles
- `src/assets/`: Static assets (images, icons)

### ESLint Configuration
- Uses flat config format (`eslint.config.js`)
- Configured for React Hooks and React Refresh
- Custom rule: `no-unused-vars` allows capitalized/underscore-prefixed variables
- Ignores `dist/` directory
- Targets ES2020+ with JSX support

### React Version
Using React 19.1.1 with modern patterns:
- React 18+ `createRoot` API for rendering
- Function components with hooks
- StrictMode enabled by default

## Notes
- No test framework configured yet
- TypeScript not currently used (plain JSX)
- React Compiler not enabled (for better dev/build performance)
