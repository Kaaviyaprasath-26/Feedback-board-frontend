# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Feedback Management App

A simple feedback management application built with React, TypeScript, and Vite.
This project demonstrates modern frontend development practices including API integration, state management, and component-based architecture.

---

## Tech Stack

* React
* TypeScript
* Vite
* TanStack Query
* ESLint

---

## Prerequisites

Before running the project, make sure you have the following installed:

* Node.js (v18 or later recommended)
* npm or yarn
* Git

---

## Getting Started

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/your-username/feedback-app.git
```

---

### 2. Navigate to the Project Directory

```bash
cd feedback-app
```

---

### 3. Install Dependencies

Install all required project dependencies:

```bash
npm install
```

---

### 4. Run the Development Server

Start the development server using:

```bash
npm run dev
```

The application will start and can be accessed at:

```
http://localhost:5173
```

---

## Project Structure

```
src
 ├── api
 │   └── feedbackApi.ts
 ├── components
 ├── pages
 ├── hooks
 ├── interfaces
 ├── App.tsx
 └── main.tsx
```

---

## Features

* View all feedback items
* Add new feedback
* Vote on feedback
* Delete feedback
* API integration using TanStack Query
* Type-safe development with TypeScript

---

## Linting

To check code quality using ESLint:

```bash
npm run lint
```

---

## Build for Production

To create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Notes

* Ensure the backend API is running before starting the frontend application.
* Update API base URLs if needed in the environment configuration.

---

## License

This project is for educational and development purposes.
