'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { OfficeLocations } from '@/components/contact/OfficeLocations';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-12">
            <ContactInfo />
            <OfficeLocations />
          </div>
        </div>
      </div>
    </div>
  );
}