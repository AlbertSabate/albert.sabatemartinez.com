import { defaultLocale, isValidLocale, type Locale } from './config';

const LOCALE_COOKIE_NAME = 'locale';

export function getLocaleFromRequest(request: Request): Locale {
  // 1. Check URL pathname
  const url = new URL(request.url);
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const pathLocale = pathSegments[0];

  if (pathLocale && isValidLocale(pathLocale)) {
    return pathLocale;
  }

  // 2. Check cookie
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const cookies = parseCookies(cookieHeader);
    const cookieLocale = cookies[LOCALE_COOKIE_NAME];
    if (cookieLocale && isValidLocale(cookieLocale)) {
      return cookieLocale;
    }
  }

  // 3. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const detectedLocale = parseAcceptLanguage(acceptLanguage);
    if (detectedLocale) {
      return detectedLocale;
    }
  }

  // 4. Default locale
  return defaultLocale;
}

function parseCookies(cookieHeader: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  cookieHeader.split(';').forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    if (name && value) {
      cookies[name] = decodeURIComponent(value);
    }
  });
  return cookies;
}

function parseAcceptLanguage(acceptLanguage: string): Locale | null {
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, quality] = lang.trim().split(';q=');
      return {
        code: code.toLowerCase().split('-')[0],
        quality: quality ? Number.parseFloat(quality) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    if (isValidLocale(code)) {
      return code as Locale;
    }
  }

  return null;
}

export function createLocaleCookie(locale: Locale): string {
  return `${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}
