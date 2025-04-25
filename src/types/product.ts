export type TProduct = {
  [x: string]: any;
  _id: string;
  brand: string;
  model: string;
  name: string;
  price: number;
  category: string;
  productImg: string;
  description: string;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};
