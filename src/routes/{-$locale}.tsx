import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { defaultLocale } from "@/lib/i18n/config";

export const Route = createFileRoute("/{-$locale}")({
  component: LocaleRoute,
  beforeLoad: async ({ params, context }) => {
    const urlLocale = params.locale;
    const detectedLocale = context.locale;

    // if !urlLocale && detectedLocale !== defaultLocale ? redirect to default
    if (!urlLocale && detectedLocale !== defaultLocale) {
      throw redirect({
        to: "/{-$locale}",
        params: { locale: detectedLocale },
        replace: true,
      });
    }
  },
});

function LocaleRoute() {
  return <Outlet />;
}
