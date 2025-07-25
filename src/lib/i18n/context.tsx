import { createContext, type ReactNode, useContext } from 'react';
import type { Locale } from './config';

interface I18nContextValue {
  locale: Locale;
  translations: Record<string, string>;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  locale: Locale;
  translations: Record<string, string>;
}

export function I18nProvider({ children, locale, translations }: I18nProviderProps) {
  return <I18nContext.Provider value={{ locale, translations }}>{children}</I18nContext.Provider>;
}

export function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18nContext must be used within I18nProvider');
  }
  return context;
}
