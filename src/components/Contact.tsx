import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/use-translation';
import type { ProfileData } from '@/types';

interface ContactProps {
  data: ProfileData['personal'];
}

export function Contact({ data }: ContactProps) {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold font-headings mb-4">{t('contact.title')}</h2>
          <p className="text-muted-foreground mb-12">{t('contact.subtitle')}</p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="mailto:albert@sabatemartinez.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                <p className="font-medium">albert@sabatemartinez.com</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-4 p-6 bg-background rounded-lg shadow-sm"
            >
              <MapPin className="h-6 w-6 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.location')}</p>
                <p className="font-medium">
                  {data.location.city}, {data.location.country}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/albertsabate"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/albertsabatemartinez/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
