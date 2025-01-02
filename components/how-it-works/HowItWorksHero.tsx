import { Lightbulb } from 'lucide-react';

export function HowItWorksHero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
          <Lightbulb className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          How Cureसाथी Works
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Simple steps to access affordable medicines from trusted sellers
        </p>
      </div>
    </div>
  );
}