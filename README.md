# Pulse — Team Dashboard

A lightweight team productivity dashboard built with React + TypeScript + Vite.

## Features

- Task board with status columns (To Do, In Progress, Done)
- Team member profiles with activity stats
- Project overview with progress tracking
- Responsive design with dark mode support
- Keyboard shortcuts for power users

## Getting Started

```bash
npm install
npm run dev
```

## Stack

- **React 19** with hooks
- **TypeScript** for type safety
- **Vite 8** for fast builds
- **CSS Variables** for theming

## Project Structure

```
src/
  components/     — Reusable UI components (Navbar, TaskCard, StatCard, etc.)
  hooks/          — Custom React hooks (useLocalStorage, useKeyboard)
  data/           — Mock data, types, and constants
  pages/          — Page-level components (Dashboard, TaskBoard)
  App.tsx         — Main app with page routing
  main.tsx        — Entry point
```

## License

MIT
