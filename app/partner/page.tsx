'use client';

import { PartnerHero } from '@/components/partner/PartnerHero';
import { PartnerBenefits } from '@/components/partner/PartnerBenefits';
import { PartnerForm } from '@/components/partner/PartnerForm';
import { SuccessStories } from '@/components/partner/SuccessStories';

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PartnerHero />
      <PartnerBenefits />
      <PartnerForm />
      <SuccessStories />
    </div>
  );
}