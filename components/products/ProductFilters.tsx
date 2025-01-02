'use client';

import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { FilterState } from '@/types/products';

const categories = [
  'All',
  'Pain Relief',
  'Diabetes',
  'Heart Health',
  'Antibiotics',
  'Vitamins',
];

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div>
        <h3 className="font-semibold mb-4 text-base sm:text-lg">Categories</h3>
        <RadioGroup
          value={filters.category}
          onValueChange={(value) =>
            onFilterChange({ ...filters, category: value })
          }
          className="space-y-2"
        >
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <RadioGroupItem value={category.toLowerCase()} id={category} />
              <Label 
                htmlFor={category} 
                className="text-sm sm:text-base cursor-pointer"
              >
                {category}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-base sm:text-lg">Price Range</h3>
        <Slider
          value={filters.priceRange}
          min={0}
          max={1000}
          step={10}
          onValueChange={(value) =>
            onFilterChange({ ...filters, priceRange: value as [number, number] })
          }
          className="my-4"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>₹{filters.priceRange[0]}</span>
          <span>₹{filters.priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-base sm:text-lg">Location</h3>
        <Input
          placeholder="Enter your location"
          value={filters.location}
          onChange={(e) =>
            onFilterChange({ ...filters, location: e.target.value })
          }
          className="w-full"
        />
      </div>

      <div>
        <h3 className="font-semibold mb-4 text-base sm:text-lg">Minimum Rating</h3>
        <RadioGroup
          value={filters.rating.toString()}
          onValueChange={(value) =>
            onFilterChange({ ...filters, rating: Number(value) })
          }
          className="space-y-2"
        >
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
              <Label 
                htmlFor={`rating-${rating}`}
                className="text-sm sm:text-base cursor-pointer"
              >
                {rating}+ Stars
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}