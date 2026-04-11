export interface Suite {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  features?: string[];
  imagePosition?: 'left' | 'right';
}
