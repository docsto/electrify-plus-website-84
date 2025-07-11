
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AdvantagesSection />
      <ProjectsSection />
      <ContactForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
