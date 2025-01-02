'use client';

import { ProductsHeader } from '@/components/products/ProductsHeader';
import { ProductFilters } from '@/components/products/ProductFilters';
import { ProductGrid } from '@/components/products/ProductGrid';
import { useState } from 'react';
import { type FilterState } from '@/types/products';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    priceRange: [0, 1000],
    rating: 0,
    location: '',
  });

  const FiltersContent = () => (
    <ProductFilters filters={filters} onFilterChange={setFilters} />
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductsHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Mobile/Tablet Filter Button */}
        <div className="lg:hidden mb-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="py-4">
                <FiltersContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block lg:col-span-1">
            <FiltersContent />
          </aside>
          
          {/* Product Grid */}
          <main className="lg:col-span-3">
            <ProductGrid filters={filters} />
          </main>
        </div>
      </div>
    </div>
  );
}