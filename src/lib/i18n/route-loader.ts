import { defaultLocale, isValidLocale, type Locale } from "./config";
import { loadTranslations } from "./loader";
import { createLocaleCookie } from "./server";

export async function loadI18nForRoute(params: { locale?: string }) {
  const locale = params.locale && isValidLocale(params.locale) ? params.locale : defaultLocale;
  const translations = await loadTranslations(locale);

  return {
    locale,
    translations,
  };
}

export function setLocaleCookie(locale: Locale) {
  if (typeof document !== "undefined") {
    // biome-ignore lint/suspicious/noDocumentCookie: Necessary for locale persistence
    document.cookie = createLocaleCookie(locale);
  }
}
