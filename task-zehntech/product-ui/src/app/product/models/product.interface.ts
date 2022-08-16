export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  categoryName?: string;
  description?: string;
}