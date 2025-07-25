import type { Locale } from './config';

const translationCache = new Map<Locale, Record<string, string>>();

function flattenTranslations(
  obj: Record<string, unknown>,
  prefix = '',
  result: Record<string, string> = {},
): Record<string, string> {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenTranslations(value as Record<string, unknown>, newKey, result);
    } else {
      result[newKey] = String(value);
    }
  }
  return result;
}

export async function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  const cached = translationCache.get(locale);
  if (cached) {
    return cached;
  }

  try {
    const translations = await import(`../../i18n/${locale}.json`);
    const flattened = flattenTranslations(translations.default || translations);
    translationCache.set(locale, flattened);
    return flattened;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    return {};
  }
}

export function translate(
  translations: Record<string, string>,
  key: string,
  params?: Record<string, string | number>,
): string {
  let translation = translations[key] || key;

  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      translation = translation.replace(new RegExp(`{{\\s*${paramKey}\\s*}}`, 'g'), String(paramValue));
    });
  }

  return translation;
}
