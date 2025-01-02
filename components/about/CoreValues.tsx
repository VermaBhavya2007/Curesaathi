import { Shield, Heart, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We ensure all medicines are quality-tested and sourced from trusted manufacturers',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'Every decision we make prioritizes the well-being of our patients',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Building a network of trusted healthcare providers and patients',
  },
  {
    icon: Target,
    title: 'Accessibility',
    description: 'Making healthcare accessible to everyone through affordable pricing',
  },
];

export function CoreValues() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <value.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}