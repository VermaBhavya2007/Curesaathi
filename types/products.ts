export interface Product {
  id: number;
  name: string;
  genericName: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  seller: {
    name: string;
    rating: number;
    location: string;
  };
  description: string;
  benefits: string[];
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  rating: number;
  location: string;
}