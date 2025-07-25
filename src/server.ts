import { createStartHandler, defaultStreamHandler, requestHandler } from '@tanstack/react-start/server';
import { loadTranslations } from './lib/i18n/loader';
import { getLocaleFromRequest } from './lib/i18n/server';
import { createRouter } from './router';

export default requestHandler(async (ctx) => {
  const locale = getLocaleFromRequest(ctx.request);
  const translations = await loadTranslations(locale);

  const url = new URL(ctx.request.url);
  const fullPath = url.pathname + url.search + url.hash; // e.g., "/en/blog?page=1#id"

  const startHandler = createStartHandler({
    createRouter: () => createRouter({ locale, translations, fullPath }),
  })(defaultStreamHandler);

  return startHandler(ctx);
});
