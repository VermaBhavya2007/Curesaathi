import { MessageCircle } from 'lucide-react';

export function ContactHero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
          <MessageCircle className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to our team.
        </p>
      </div>
    </div>
  );
}