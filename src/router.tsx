import { QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { NotFound } from "@/components/not-found";
import type { Locale } from "@/lib/i18n/config";
import { routeTree } from "@/routeTree.gen";

// NOTE: Most of the integration code found here is experimental and will
// definitely end up in a more streamlined API in the future. This is just
// to show what's possible with the current APIs.

export interface RouterContext {
  queryClient: QueryClient;
  locale: Locale;
  translations: Record<string, string>;
  fullPath: string;
}

interface CreateRouterOptions {
  locale?: Locale;
  translations?: Record<string, string>;
  fullPath: string;
}

export function createRouter(options: CreateRouterOptions) {
  const queryClient = new QueryClient();

  const context: RouterContext = {
    queryClient,
    locale: options.locale || "en",
    translations: options.translations || {},
    fullPath: options.fullPath,
  };

  // The type error occurs because routerWithQueryClient expects a specific router type
  // We need to explicitly type the router to match what routerWithQueryClient expects
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    context,
    defaultPreload: "intent",
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
  });

  return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
