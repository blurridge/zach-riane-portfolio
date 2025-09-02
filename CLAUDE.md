# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with Astro.js, React, and Tailwind CSS. It's a single-page application showcasing personal projects, experience, and contact information.

## Development Commands

- `pnpm install` or `npm install` - Install dependencies
- `pnpm dev` or `npm run dev` - Start development server
- `pnpm build` or `npm run build` - Build for production (includes type checking)
- `pnpm preview` or `npm run preview` - Preview production build
- `pnpm format` or `npm run format` - Format code with Prettier

## Code Formatting

This project uses Prettier with Husky pre-commit hooks for automatic formatting. The following files are auto-formatted on commit:

- `*.{js,jsx,ts,tsx,md,html,css,astro}`

Prettier configuration includes the `prettier-plugin-astro` for Astro file formatting.

## Architecture

### Tech Stack

- **Astro.js** - Static site generator with React integration
- **React 18** - For interactive components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Nanostores** - Lightweight state management

### Project Structure

```
src/
├── components/          # Astro and React components
│   ├── astro-ui-components/  # Reusable Astro components
│   └── *.astro         # Main page section components
├── data/               # Static data (projects, experiences)
├── layouts/            # Astro layout components
├── pages/              # Astro pages (index.astro is main page)
├── stores/             # Nanostores state management
└── assets/             # Static assets and images
```

### Key Files

- `src/pages/index.astro` - Main single-page application entry point
- `src/layouts/Layout.astro` - Base HTML layout wrapper
- `src/data/` - Contains TypeScript files with project and experience data
- `tailwind.config.mjs` - Custom Tailwind configuration with project-specific colors and fonts

### TypeScript Configuration

- Uses Astro's strict TypeScript configuration
- Path aliases configured: `@/*` for `src/*` and `@components/*` for `src/components/*`
- JSX configured for React with `react-jsx` transform

### Styling Approach

- Tailwind CSS with custom color palette (`light-purple`, `dark-purple`, `hiyo-purple`, etc.)
- Montserrat Variable font as primary typeface
- Component-level styling using Tailwind utility classes
- Custom font size `2xs` defined for small text

### State Management

- Uses Nanostores for lightweight client-side state
- Store files in `src/stores/` for navigation and greeting state

### Component Architecture

- Astro components for static content and layout
- React integration enabled for interactive components
- Separation between Astro UI components and main section components
