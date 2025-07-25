import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { I18nProvider, useI18nContext } from '@/lib/i18n/context';
import type { RouterContext } from '@/router';
import globalStyles from '@/styles/globals.css?url';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  beforeLoad: async () => {
    return { publicEnv: {} };
  },
  head: () => ({
    head: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: globalStyles,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@300;400;500;600&display=swap',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/icons/android-chrome-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#0b2027' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/logo/favicon.svg' },
    ],
  }),
});

function RootComponent() {
  const { locale, translations, publicEnv } = Route.useRouteContext();

  if (typeof window !== 'undefined') {
    if (!window.publicEnv) {
      window.publicEnv = publicEnv;
    }
  }

  return (
    <I18nProvider locale={locale} translations={translations}>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </I18nProvider>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  // Get locale from I18n context to ensure html lang updates with locale changes
  const { locale } = useI18nContext();

  // Default to light theme on server to match most common case
  // The theme-script.js will update if user prefers dark mode -- TODO check to use media query instead of class
  return (
    <html lang={locale} className="light" data-theme="light" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
