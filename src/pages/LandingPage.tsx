import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { MissionSection } from '../components/MissionSection';
import { ChallengesSection } from '../components/ChallengesSection';
import { ServicesSection } from '../components/ServicesSection';
import { SynergySection } from '../components/SynergySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ImpactSection } from '../components/ImpactSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-cream-100 selection:bg-sage-200 selection:text-navy-500">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ChallengesSection />
        <ServicesSection />
        <SynergySection />
        <TestimonialsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>);

}