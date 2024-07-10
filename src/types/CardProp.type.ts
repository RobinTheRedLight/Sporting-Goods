export interface CardProps {
  product: {
    id: number;
    name: string;
    category: string;
    stockQuantity: number;
    brand: string;
    rating: number;
    description: string;
    price: number;
    image: string;
  };
}