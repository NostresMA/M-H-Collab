import React from 'react';
import { NavbarUA } from '../components/ua/NavbarUA';
import { HeroSectionUA } from '../components/ua/HeroSectionUA';
import { MissionSectionUA } from '../components/ua/MissionSectionUA';
import { ChallengesSectionUA } from '../components/ua/ChallengesSectionUA';
import { ServicesSectionUA } from '../components/ua/ServicesSectionUA';
import { SynergySectionUA } from '../components/ua/SynergySectionUA';
import { TestimonialsSectionUA } from '../components/ua/TestimonialsSectionUA';
import { ImpactSectionUA } from '../components/ua/ImpactSectionUA';
import { CTASectionUA } from '../components/ua/CTASectionUA';
import { FooterUA } from '../components/ua/FooterUA';
interface LandingPageUAProps {
  onLanguageChange: (lang: 'en' | 'ua') => void;
}
export function LandingPageUA({ onLanguageChange }: LandingPageUAProps) {
  return (
    <div className="min-h-screen bg-cream-100 selection:bg-sage-200 selection:text-navy-500">
      <NavbarUA onLanguageChange={onLanguageChange} />
      <main>
        <HeroSectionUA />
        <MissionSectionUA />
        <ChallengesSectionUA />
        <ServicesSectionUA />
        <SynergySectionUA />
        <TestimonialsSectionUA />
        <ImpactSectionUA />
        <CTASectionUA />
      </main>
      <FooterUA />
    </div>);

}