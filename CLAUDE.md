# Albert's Portfolio/CV Website

## Project Overview
This is a personal portfolio/CV website for Albert Sabaté Martínez, built with modern web technologies and deployed to Cloudflare at https://albert.sabatemartinez.com

## Tech Stack
- **Framework**: TanStack React Start v1.129.8 (React meta-framework with file-based routing)
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Language**: TypeScript with strict mode
- **Package Manager**: Bun
- **Deployment**: Cloudflare Workers/Pages
- **Linting/Formatting**: Biome v2.x
- **Build Tool**: Vite v7

## Project Structure
```
cv/
├── src/
│   ├── client.tsx          # Client entry point
│   ├── server.ts           # Server entry point  
│   ├── router.tsx          # Router configuration with React Query
│   ├── routeTree.gen.ts    # Generated route tree (DO NOT EDIT)
│   ├── routes/             # File-based routes
│   │   ├── __root.tsx      # Root route with providers
│   │   ├── index.tsx       # Redirects to locale route
│   │   └── {-$locale}/     # Locale-specific routes
│   │       └── index.tsx   # Main portfolio page
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Education.tsx   # Education & certifications
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Contact.tsx     # Contact information
│   │   └── Footer.tsx      # Page footer
│   ├── lib/i18n/          # Internationalization
│   │   ├── config.ts       # i18n configuration
│   │   ├── context.tsx     # React context provider
│   │   ├── use-translation.ts # Translation hook
│   │   └── language-switcher.tsx # Language toggle
│   ├── i18n/              # Translation files
│   │   ├── en.json        # English translations
│   │   └── es.json        # Spanish translations
│   └── styles/
│       └── globals.css    # Global styles & Tailwind imports
```

## Key Features
- **Internationalization (i18n)**: Custom implementation supporting English and Spanish
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Code splitting, lazy loading, and optimized assets
- **Animations**: Framer Motion for smooth interactions
- **Type Safety**: Full TypeScript coverage with strict mode

## Development Commands
```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Type checking
bun run typecheck

# Linting
bun run lint

# Format code
bun run format

# Build for production
bun run build

# Preview production build
bun run preview

# Deploy to Cloudflare
bun run deploy
```

## Best Practices
- **No barrel files**: Import directly from specific files, not index.ts exports
- **Direct imports**: Use full import paths like `@/lib/i18n/use-translation`
- **File naming**: Use kebab-case for files, PascalCase for components
- **Component structure**: Follow existing patterns in the codebase
- **Type safety**: Always provide proper TypeScript types
- **i18n**: All user-facing text should use translations

## Routing
The app uses file-based routing with TanStack Router:
- `/{-$locale}` - Main route with locale parameter (e.g., `/en`, `/es`)
- Routes automatically handle locale switching and redirects
- Default locale is English (`en`)

## i18n Implementation
- Custom i18n solution (not i18next) following patterns from the zenet project
- Translations loaded on demand based on route locale
- Language switcher component for easy locale changes
- Cookie-based locale persistence

## Deployment
The site is deployed to Cloudflare Workers:
- Domain: albert.sabatemartinez.com
- Configuration: wrangler.jsonc
- Environments: production, preview

## Data Source
Profile data is scraped from:
- https://arc.dev/@albertsabate
- https://www.linkedin.com/in/albertsabatemartinez/

Data is stored in `profile-data.json` and includes:
- Personal information
- Work experience
- Skills and technologies
- Education and certifications
- Testimonials

## Environment Configuration
- Node.js v22.17.1
- Bun runtime
- Linux environment

## Common Issues & Solutions

### Import Errors
If you see "Cannot find module '@/lib/i18n'" errors:
- Check that tsconfig.json has `"baseUrl": "."`
- Ensure you're not using barrel file imports

### Serialization Errors
QueryClient serialization issues are handled by:
- Using `routerWithQueryClient` wrapper
- Keeping QueryClient in router context

### Type Errors with Routes
When using Link components:
- Use `to="/{-$locale}"` with `params={{ locale }}`
- Get locale from `useTranslation()` hook

## Notes for AI Assistants
- Always check existing patterns before implementing new features
- Run typecheck and lint after making changes
- The routeTree.gen.ts file is auto-generated - never edit it directly
- When adding new components, follow the existing component structure
- All text content should be internationalized