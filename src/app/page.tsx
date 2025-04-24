import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import FacultySection from '@/components/FacultySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactCTASection from '@/components/ContactCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <FacultySection />
      <TestimonialsSection />
      <ContactCTASection />
    </>
  );
} 