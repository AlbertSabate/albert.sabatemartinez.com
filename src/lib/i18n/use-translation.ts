import { useMemo } from "react";
import { useI18nContext } from "./context";
import { translate } from "./loader";

export function useTranslation() {
  const { locale, translations } = useI18nContext();

  const t = useMemo(
    () => (key: string, params?: Record<string, string | number>) => {
      return translate(translations, key, params);
    },
    [translations],
  );

  return { t, locale };
}
