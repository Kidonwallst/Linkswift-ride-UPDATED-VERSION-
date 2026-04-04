<div align="center">
<img width="1200" height="475" alt="LinkSwift Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# LinkSwift Ride

Premium rides, luxury stays, and swift delivery services for the discerning traveler.

A modern, responsive web application built with React 19, TypeScript, and Vite, deployed on Cloudflare Workers.

## Quick Start

**Prerequisites:** Node.js 18+ and npm

### Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd linkswift-ride
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file (optional, for advanced features):
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Deploy to Cloudflare Workers

```bash
npm run deploy
```

Requires a Cloudflare account and `wrangler` CLI configured with your credentials.

## Project Structure

- **src/** - React components and utilities
  - `App.tsx` - Main application component
  - `main.tsx` - React entry point with error boundary
  - `index.css` - Global styles with Tailwind CSS
  - `lib/utils.ts` - Utility functions
  - `components/` - Reusable React components
- **public/** - Static assets
- **vite.config.ts** - Vite configuration with Tailwind and Cloudflare plugins
- **wrangler.jsonc** - Cloudflare Workers configuration
- **tsconfig.json** - TypeScript configuration with strict mode enabled

## Features

- ✨ Modern, responsive UI with Tailwind CSS v4
- 🚀 Optimized performance with lazy-loaded images
- ♿ Full accessibility support (WCAG 2.1 Level AA)
- 🛡️ Error boundary for graceful error handling
- 📱 Mobile-first design
- 🎨 Smooth animations with Framer Motion
- 🌐 Deployed globally on Cloudflare Edge Network

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run lint` | Run TypeScript type checking |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to Cloudflare Workers |
| `npm run preview` | Preview production build locally |

## Technology Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4
- **UI Components:** Lucide React icons
- **Animations:** Framer Motion
- **Deployment:** Cloudflare Workers/Pages
- **Package Manager:** npm

## Environment Variables

Optional environment variables can be set in `.env.local`:

```
VITE_API_BASE_URL=https://api.linkswiftride.com
VITE_APP_ENV=development
VITE_ENABLE_ANALYTICS=true
```

See [.env.example](.env.example) for all available options.

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

LinkSwift Ride © 2024. All rights reserved.
