import { TProduct } from "./product";
import { TTransaction } from "./transaction";

export type TStatus = "Pending" | "Shipping";

export type TOrder = {
  _id: string;
  email?: string;
  transaction: TTransaction;
  product: TProduct;
  quantity: number;
  totalPrice: number;
  userId?: string;
  phone: string;
  address: string;
  status: TStatus;
};
