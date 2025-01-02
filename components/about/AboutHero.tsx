import { Heart } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
          <Heart className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Making Healthcare Accessible
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We believe everyone deserves access to quality, affordable healthcare
        </p>
      </div>
    </div>
  );
}