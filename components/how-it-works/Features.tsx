import { Shield, Percent, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All medicines are sourced from licensed pharmacies and verified sellers',
  },
  {
    icon: Percent,
    title: 'Best Prices',
    description: 'Compare prices to get the best deals on your medicines',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Fast delivery and easy pickup options available',
  },
  {
    icon: MapPin,
    title: 'Local Sellers',
    description: 'Connect with trusted sellers in your area',
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}