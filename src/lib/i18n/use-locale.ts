import { useParams } from '@tanstack/react-router';
import { defaultLocale, isValidLocale, type Locale } from './config';

export function useLocale(): Locale {
  const params = useParams({ strict: false });
  const locale = params.locale as string | undefined;

  if (locale && isValidLocale(locale)) {
    return locale;
  }

  return defaultLocale;
}
