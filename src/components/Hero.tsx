import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/use-translation";
import type { ProfileData } from "@/types";

interface HeroProps {
  data: ProfileData["personal"];
}

export function Hero({ data }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-lg text-muted-foreground mb-2">{t("hero.greeting")}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-headings mb-4">{data.name}</h1>
          <p className="text-2xl sm:text-3xl text-primary font-medium mb-6">{t("hero.title")}</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t("hero.subtitle")}</p>

          {/* Stats section */}
          {data.stats && (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-primary">{data.stats.yearsOfExperience}+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.yearsExperience")}</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-primary">{data.stats.projectsDelivered}+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.projectsDelivered")}</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-primary">{data.stats.usersImpacted}</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.usersImpacted")}</div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-primary">{data.stats.teamsLed}+</div>
                <div className="text-sm text-muted-foreground">{t("hero.stats.teamsLed")}</div>
              </div>
            </motion.div>
          )}

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t("hero.cta")}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
