'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export function PartnerForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="partner-form" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Join Our Network
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="license">Business License Number</Label>
              <Input id="license" required />
            </div>

            <div className="space-y-2">
              <Label>Product Categories</Label>
              <div className="grid grid-cols-2 gap-4">
                {['Generic Medicines', 'Ayurvedic', 'Medical Supplies', 'Health Supplements'].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}