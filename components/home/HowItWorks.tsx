import { Search, ShoppingCart, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search',
    description: 'Find the medicines you need',
  },
  {
    icon: ShoppingCart,
    title: 'Compare',
    description: 'Compare prices from trusted sellers',
  },
  {
    icon: ThumbsUp,
    title: 'Buy',
    description: 'Purchase safely and securely',
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4 transform hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}