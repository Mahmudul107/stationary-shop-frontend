export type TProduct = {
  [x: string]: any;
  name: string;
  _id: string;
  brand: string;
  model: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
  quantity: number;
  stock: boolean;
  isDeleted: boolean;
};
