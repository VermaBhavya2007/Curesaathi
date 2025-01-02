'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          हर घर तक safe स्वास्थ्य
        </h1>
        <div className="max-w-2xl mx-auto relative px-4">
          <Input
            type="search"
            placeholder="Search for medicines..."
            className="w-full h-12 pl-12 pr-4 rounded-full shadow-lg text-base md:text-lg"
          />
          <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
}