export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
  rating: number;
  price: number;
  image: string;
  createdAt?: Date;
  productId?: string;
}
