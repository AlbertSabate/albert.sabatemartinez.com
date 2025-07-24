import { defaultLocale, type Locale } from "./config";

export function getLocalizedUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === defaultLocale) {
    return cleanPath;
  }

  return `/${locale}${cleanPath}`;
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (!firstSegment) {
    return null;
  }

  return firstSegment as Locale;
}

export function removeLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && (firstSegment === "en" || firstSegment === "es")) {
    return `/${segments.slice(1).join("/")}`;
  }

  return pathname;
}

export function getTextDirection(_locale: Locale): "ltr" | "rtl" {
  // For now, all supported locales are LTR
  return "ltr";
}
