import { ArrowRight } from 'lucide-react';

export function PartnerHero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Partner with Cureसाथी
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Join our network of trusted sellers and help make quality healthcare accessible to everyone
        </p>
        <a href="#partner-form" className="inline-flex items-center text-blue-600 hover:text-blue-700">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}