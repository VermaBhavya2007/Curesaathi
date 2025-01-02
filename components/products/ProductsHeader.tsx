import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function ProductsHeader() {
  return (
    <div className="bg-white shadow-sm py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Browse Medicines</h1>
        <div className="max-w-2xl relative">
          <Input
            type="search"
            placeholder="Search medicines by name..."
            className="w-full pl-12 pr-4 h-12"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
}