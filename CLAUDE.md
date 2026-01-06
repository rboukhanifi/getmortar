# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Architecture

This is a React 19 + TypeScript + Vite application styled with Tailwind CSS.

### Tech Stack
- **React 19** with react-router-dom v7 for routing
- **Vite 7** as the build tool
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Project Structure
- `src/pages/` - Route page components (Home, Company, Solutions, Blog, TermsOfService)
- `src/components/` - Reusable UI components including animated backgrounds (ParticleBackground, WhiteHoleBackground, NoiseGrid) and layout components (Navbar, Footer, Hero)
- `src/App.tsx` - Root component with react-router-dom route definitions
- `src/main.tsx` - Application entry point

### Routing
Routes are defined in `App.tsx` using react-router-dom's `BrowserRouter`. Current routes: `/`, `/company`, `/terms`, `/solutions`, `/blog`.
