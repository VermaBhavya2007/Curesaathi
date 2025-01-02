import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Medicines',
    description: 'Enter the medicine name or browse by category to find what you need',
  },
  {
    icon: ShoppingCart,
    title: 'Compare & Choose',
    description: 'Compare prices from different verified sellers in your area',
  },
  {
    icon: Truck,
    title: 'Place Order',
    description: 'Select your preferred seller and place your order securely',
  },
  {
    icon: CheckCircle,
    title: 'Receive Medicines',
    description: 'Get your medicines delivered or pick up from the store',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Simple 4-Step Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center p-6">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <step.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}