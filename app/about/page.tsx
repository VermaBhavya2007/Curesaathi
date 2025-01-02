'use client';

import { AboutHero } from '@/components/about/AboutHero';
import { MissionVision } from '@/components/about/MissionVision';
import { CoreValues } from '@/components/about/CoreValues';
import { Impact } from '@/components/about/Impact';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Impact />
    </div>
  );
}