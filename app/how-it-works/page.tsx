'use client';

import { HowItWorksHero } from '@/components/how-it-works/HowItWorksHero';
import { ProcessSteps } from '@/components/how-it-works/ProcessSteps';
import { Features } from '@/components/how-it-works/Features';
import { FAQ } from '@/components/how-it-works/FAQ';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HowItWorksHero />
      <ProcessSteps />
      <Features />
      <FAQ />
    </div>
  );
}