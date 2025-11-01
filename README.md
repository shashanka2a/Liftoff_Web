# SaaS Landing Page - Next.js

A modern, production-ready SaaS landing page built with Next.js 15, React, TypeScript, and Tailwind CSS v4.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS v4** for styling
- 📱 **Fully Responsive** design
- 🎭 **Motion** animations
- 🖼️ **Optimized Images** with next/image
- 🌙 **Dark Mode** support (via next-themes)
- ♿ **Accessible** UI components
- 🚀 **Production Ready**

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for production:**

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ...           # Feature components
│   └── styles/            # Additional styles
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Migrations from Vite

- ✅ Converted to Next.js App Router
- ✅ Updated all image components to use `next/image`
- ✅ Removed version tags from imports
- ✅ Added proper `use client` directives
- ✅ Configured font loading with `next/font`
- ✅ Updated all animations to use `motion/react`
- ✅ Added SEO metadata in layout
- ✅ Configured remote image patterns

## Technologies

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## License

MIT
