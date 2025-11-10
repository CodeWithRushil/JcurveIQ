# JcurveIQ Assignment

A small React + Redux UI that demonstrates a project notebook, a project detail pane, and a chat input. The app uses a local mock server for project data to allow fast iteration and dev-state testing.

## Quick links
- Project entry: `src/App.jsx`
- Redux store: `src/app/store.js`
- Projects slice & async loader: `src/features/projects/projectsSlice.js`
- Mock server & data: `src/features/projects/mockServer.js`, `src/features/projects/mockData.json`
- UI components:
  - `src/components/Sidebar.jsx`
  - `src/components/ProjectDetail.jsx`
  - `src/components/NotebookPanel.jsx`
  - `src/components/DevControls.jsx`
  - `src/components/ChatInput.jsx`
- Dev config: `vite.config.js`, `package.json`, `eslint.config.js`
- App bootstrap & styles: `src/main.jsx`, `index.html`, `src/index.css`

## Setup

1. Install dependencies
```bash
npm install
```

2. Run in development
```bash
npm run dev
```

3. Build for production
```bash
npm run build
npm run preview
```

4. Lint
```bash
npm run lint
```

## Tech stack & key decisions
- React 19 + React DOM for UI.
- Redux Toolkit for predictable state management and async thunks.
- Vite as dev server / build tool.
- Tailwind CSS for styling (configured in `src/index.css`).
- Local in-process mock server for fast UI development and dev-state simulation.

Key decisions:
- Use Redux Toolkit to keep slice logic co-located and simplify async flows.
- Use a local mock server to avoid backend dependencies during UI development and to enable simulated states (loading, error, empty).
- Keep layout simple and responsive; notebook panel hidden on narrow screens.

## Folder structure
- src/
  - `App.jsx` — main layout
  - `main.jsx` — app bootstrap
  - `index.css` — global styles & Tailwind
  - app/
    - `store.js` — Redux store config
  - features/
    - projects/
      - `projectsSlice.js` — Redux slice & thunks
      - `mockServer.js` — in-memory mock server
      - `mockData.json` — sample data
  - components/
    - `Sidebar.jsx`, `ProjectDetail.jsx`, `NotebookPanel.jsx`, `DevControls.jsx`, `ChatInput.jsx`

## How to toggle mock states
The mock server supports simulation modes:
- `success` — normal data (default)
- `loading` — simulates a hanging request
- `error` — throws an error
- `empty` — returns empty lists

Toggle modes:
- UI: open the Notebook panel and use the DevControls buttons (`src/components/DevControls.jsx`). These dispatch `setSimulate` and call `loadProjects`.
- Programmatically: dispatch the thunk with options:
```js

dispatch(loadProjects({ simulate: 'error' }))
```

Mock implementation: `src/features/projects/mockServer.js`.

## Known gaps & tradeoffs
- Mock-only backend: no real persistence; data resets on refresh. Good for UI dev, not for integration or production.
- Limited error handling: basic error UI, no retry strategy or toast notifications.
- Tests: none included (unit/integration tests missing).
- Accessibility: basic keyboard/focus handling present, but no full a11y audit.
- Assets: external/public SVG icons referenced; missing icons may break visuals.
- Tailwind & plugin versions: ensure local environment matches `package.json` versions.

If desired, next steps can include:
- Add local persistence (localStorage) to mock server.
- Add unit tests for the slice and core components.
- Improve error handling and add retry/notification UI.