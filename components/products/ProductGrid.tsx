'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';
import type { FilterState, Product } from '@/types/products';
import { products } from '@/data/products';

interface ProductGridProps {
  filters: FilterState;
}

export function ProductGrid({ filters }: ProductGridProps) {
  const filteredProducts = products.filter((product) => {
    if (filters.category !== 'all' && product.category !== filters.category) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.rating > 0 && product.rating < filters.rating) {
      return false;
    }
    if (filters.location && !product.seller.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-1">{product.genericName}</p>
            <div className="flex items-center mb-2">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm">{product.rating}</span>
              <span className="mx-1 text-gray-400">•</span>
              <span className="text-sm text-gray-600">{product.reviews} reviews</span>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span className="ml-1 text-sm text-gray-600 line-clamp-1">{product.seller.name} - {product.seller.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
              <Button className="w-full sm:w-auto">View Details</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}