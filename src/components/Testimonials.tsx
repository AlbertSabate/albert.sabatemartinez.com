import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/use-translation';
import type { ProfileData } from '@/types';

interface TestimonialsProps {
  data: ProfileData['testimonials'];
}

export function Testimonials({ data }: TestimonialsProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-headings text-center mb-12">{t('testimonials.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {data.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-muted/50 rounded-lg p-8 relative"
              >
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                <div className="relative z-10">
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="text-right">
                    <p className="font-semibold">— {testimonial.name}</p>
                    {testimonial.role && <p className="text-sm text-muted-foreground">{testimonial.role}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
