import { Users, TrendingUp, Shield, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Wider Reach',
    description: 'Connect with customers across multiple locations',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Increase your sales with our digital platform',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'Verified seller badge and secure transactions',
  },
  {
    icon: Truck,
    title: 'Easy Logistics',
    description: 'Simplified delivery and inventory management',
  },
];

export function PartnerBenefits() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Partner with Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}