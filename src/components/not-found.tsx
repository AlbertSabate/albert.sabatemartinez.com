import { Link } from "@tanstack/react-router";
import { useTranslation } from "@/lib/i18n/use-translation";

export function NotFound() {
  const { locale } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link
          to="/{-$locale}"
          params={{ locale }}
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
