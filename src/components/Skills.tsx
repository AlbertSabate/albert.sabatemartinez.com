import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/use-translation';
import type { ProfileData } from '@/types';

interface SkillsProps {
  data: ProfileData['skills'];
}

export function Skills({ data }: SkillsProps) {
  const { t } = useTranslation();

  const SkillBar = ({ skill, index }: { skill: { name: string; years: number }; index: number }) => {
    const percentage = Math.min((skill.years / 10) * 100, 100);

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">
            {skill.years} {t('skills.years')}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
            className="h-full bg-primary"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold font-headings text-center mb-12">{t('skills.title')}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Primary Skills</h3>
              <div className="space-y-4">
                {data.primary.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
              <div className="space-y-4">
                {data.technical.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + data.primary.length} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
