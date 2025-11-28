export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  image: string;
  images?: string[];
  price: number;
  rating: number;
  description: string;
  category: string[];
  address: {
    city: string;
    country: string;
  };
  reviews: Review[];
}
