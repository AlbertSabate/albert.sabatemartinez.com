import { createFileRoute, useParams } from '@tanstack/react-router';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Testimonials } from '@/components/Testimonials';
import type { Locale } from '@/lib/i18n/config';
import { getProfileData } from '@/lib/profile-data';

export const Route = createFileRoute('/{-$locale}/')({
  component: HomePage,
});

function HomePage() {
  const { locale = 'en' } = useParams({ strict: false });
  const profileData = getProfileData(locale as Locale);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <Hero data={profileData.personal} />
        <About data={profileData.about} />
        <Projects data={profileData.projects} />
        <Experience data={profileData.experience} />
        <Skills data={profileData.skills} />
        <Education data={profileData.education} certifications={profileData.certifications} />
        <Testimonials data={profileData.testimonials} />
        <Contact data={profileData.personal} />
      </main>
      <Footer />
    </div>
  );
}
