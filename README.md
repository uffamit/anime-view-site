# Anime View Site

A modern anime streaming interface built with Next.js and React, featuring a dark-themed UI with theme toggling capabilities.

## Project Structure

```
anime-view-site/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Header with navigation
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── MainContent.tsx    # Main content area
│   ├── AnimeCard.tsx      # Anime card component
│   └── ThemeToggle.tsx    # Theme switcher
├── context/               # React context providers
│   └── ThemeContext.tsx   # Theme context
├── public/                # Static assets
│   └── assets/            # Images, videos, and other media
├── src/                   # Additional source files
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## Features

- 🎨 Dark theme with light mode toggle
- 📱 Responsive design
- 🎬 Anime content display with cards
- 🔍 Search functionality
- 🎥 Video background support
- ⚡ Server-side rendering with Next.js

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build

```bash
npm run build
npm start
```

## Technologies

- **Framework:** Next.js 14+
- **UI Library:** React 18+
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Linting:** ESLint

## License

MIT
