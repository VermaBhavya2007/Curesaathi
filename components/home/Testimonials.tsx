'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Customer',
    content: 'Cure Saathi helped me find affordable medicines for my family. Great service!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Partner',
    content: 'Being a partner with Cure Saathi has helped grow my pharmacy business.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-lg">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}