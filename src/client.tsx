import { StartClient } from '@tanstack/react-start';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { defaultLocale, isValidLocale, type Locale } from './lib/i18n/config';
import { loadTranslations } from './lib/i18n/loader';
import { createRouter } from './router';

// Get locale from the current page
async function initializeClient() {
  // In the browser, we can detect locale from the current URL and document lang
  const htmlLang = document.documentElement.lang;
  const locale: Locale = htmlLang && isValidLocale(htmlLang) ? htmlLang : defaultLocale;

  // Load translations for the detected locale
  const translations = await loadTranslations(locale);

  // Get the full path without host for the client
  const fullPath = window.location.pathname + window.location.search + window.location.hash;

  const router = createRouter({ locale, translations, fullPath });

  hydrateRoot(
    document,
    <StrictMode>
      <StartClient router={router} />
    </StrictMode>,
  );
}

initializeClient();
