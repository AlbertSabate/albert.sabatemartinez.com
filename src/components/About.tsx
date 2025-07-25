import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/use-translation';

interface AboutProps {
  data: string;
}

export function About({ data }: AboutProps) {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-headings text-center mb-12">{t('about.title')}</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>{data}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
