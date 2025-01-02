'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Generic Paracetamol',
    price: '₹20',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Generic Metformin',
    price: '₹45',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Generic Amlodipine',
    price: '₹35',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-lg">{product.name}</h3>
                <p className="text-blue-600 font-bold mb-4 text-xl">{product.price}</p>
                <Button className="w-full">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}