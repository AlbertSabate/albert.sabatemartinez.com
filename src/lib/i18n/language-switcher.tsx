import { useParams } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { cn } from "@/utils/cn";
import { type Locale, localeNames, locales } from "./config";
import { setLocaleCookie } from "./route-loader";
import { getLocalizedUrl, removeLocaleFromPathname } from "./utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const params = useParams({ strict: false });
  const currentLocale = (params.locale as Locale) || "en";

  const handleLocaleChange = (newLocale: Locale) => {
    setLocaleCookie(newLocale);
    const currentPath = window.location.pathname;
    const pathWithoutLocale = removeLocaleFromPathname(currentPath);
    const newPath = getLocalizedUrl(pathWithoutLocale, newLocale);

    // Force a full page reload to ensure all components re-render with new locale
    window.location.href = newPath;
  };

  return (
    <div className={cn("relative group", className)}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{localeNames[currentLocale]}</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 origin-top-right scale-95 transform opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
        <div className="rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                type="button"
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={cn(
                  "block w-full px-4 py-2 text-left text-sm hover:bg-muted",
                  currentLocale === locale && "bg-muted font-medium",
                )}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
