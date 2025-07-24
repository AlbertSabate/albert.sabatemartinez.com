import { useTranslation } from "@/lib/i18n/use-translation";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
        <p>
          © {currentYear} Albert Sabaté Martínez. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
}
