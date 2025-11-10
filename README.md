# 🧠 JcurveIQ Assignment

A small **React + Redux** UI demonstrating a project notebook, a project detail pane, and a chat input. The app uses a **local mock server** for project data to allow fast iteration and simulated loading/error states.

---

## 🚀 Quick Links

| Section | Path |
|----------|------|
| 🏗️ App Entry | [`src/App.jsx`](src/App.jsx) |
| 🧩 Redux Store | [`src/app/store.js`](src/app/store.js) |
| ⚙️ Projects Slice | [`src/features/projects/projectsSlice.js`](src/features/projects/projectsSlice.js) |
| 🧪 Mock Server | [`src/features/projects/mockServer.js`](src/features/projects/mockServer.js) |
| 📄 Mock Data | [`src/features/projects/mockData.json`](src/features/projects/mockData.json) |
| 🧱 UI Components | [`src/components/Sidebar.jsx`](src/components/Sidebar.jsx), [`src/components/ProjectDetail.jsx`](src/components/ProjectDetail.jsx), [`src/components/NotebookPanel.jsx`](src/components/NotebookPanel.jsx), [`src/components/DevControls.jsx`](src/components/DevControls.jsx), [`src/components/ChatInput.jsx`](src/components/ChatInput.jsx) |
| 🧰 Dev Config | [`vite.config.js`](vite.config.js), [`package.json`](package.json), [`eslint.config.js`](eslint.config.js) |
| 🎨 Styles & Bootstrap | [`src/main.jsx`](src/main.jsx), [`index.html`](index.html), [`src/index.css`](src/index.css) |

---

## ⚡ Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run in Development
```bash
npm run dev
```

### 3️⃣ Build for Production
```bash
npm run build
npm run preview
```

### 4️⃣ Lint
```bash
npm run lint
```

---

## 🧠 Tech Stack & Key Decisions

**Core Stack**
- ⚛️ React 19 + React DOM — UI rendering  
- 🧰 Redux Toolkit — state management & async thunks  
- ⚡ Vite — fast development server & bundler  
- 🎨 Tailwind CSS — utility-first styling  
- 💾 Local Mock Server — backend-free simulation  

**Design Decisions**
- Keep Redux slice logic **co-located** for clarity.  
- Use a **local mock server** for isolated UI testing (no backend dependency).  
- Responsive layout: notebook panel hidden on smaller screens.  
- Support **simulation modes** for rapid UI iteration (success, loading, error, empty).  

---

## 📁 Folder Structure

```bash
src/
│
├── App.jsx                   # Main layout and structure
├── main.jsx                  # App bootstrap
├── index.css                 # Global styles & Tailwind setup
│
├── app/
│   └── store.js              # Redux store configuration
│
├── features/
│   └── projects/
│       ├── projectsSlice.js  # Redux slice & async thunks
│       ├── mockServer.js     # Local mock server logic
│       └── mockData.json     # Mock data
│
└── components/
    ├── Sidebar.jsx
    ├── ProjectDetail.jsx
    ├── NotebookPanel.jsx
    ├── DevControls.jsx
    └── ChatInput.jsx
```

---

## 🧪 Mock State Simulation

You can simulate different server states for development:

| Mode | Description |
|------|--------------|
| `success` | Loads normal mock data *(default)* |
| `loading` | Simulates a hanging request |
| `error` | Throws a server error |
| `empty` | Returns empty lists |

### 🔧 Toggle Methods

**1️⃣ UI Method**  
Use the `DevControls` buttons (inside Notebook Panel).  
They dispatch `setSimulate()` and trigger `loadProjects()`.

**2️⃣ Programmatic Method**
```js
dispatch(loadProjects({ simulate: 'error' }))
```

Mock implementation: [`src/features/projects/mockServer.js`](src/features/projects/mockServer.js)

---

## ⚠️ Known Gaps & Tradeoffs
- Mock-only backend — no persistence; resets on refresh.  
- Minimal error UI (no retry/toast system yet).  
- No test coverage (unit/integration).  
- Basic accessibility (no full a11y audit).  
- SVG icons are local/public — missing icons may break visuals.  
- Tailwind plugin versions depend on `package.json` versions.

---

## 🤖 Note on AI Assistance
This README and some minor parts of the assignment were assisted by **AI (ChatGPT)** for clarity and consistency.
