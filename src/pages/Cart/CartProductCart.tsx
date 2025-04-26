import { Button } from "@/components/ui/button";
import {
  decrementOrderQuantity,
  ICartItem,
  incrementOrderQuantity,
  removeFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Minus, Plus, Trash } from "lucide-react";

export default function CartProductCard({ product }: { product: ICartItem }) {
  const dispatch = useAppDispatch();
  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementOrderQuantity(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  console.log(product);

  return (
    <div className="mb-5">
      <div className="text-white bg-slate-400 rounded-lg flex p-5 gap-5 col-span-8">
        <div className="h-full rounded-md overflow-hidden">
          <img
            width={200}
            height={200}
            alt="product img"
            src={product?.imageUrl}
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <h1 className="text-xl font-semibold">{product?.name}</h1>
          <div className="flex gap-5 my-2">
            {/* <p>
           
          </p> */}
          </div>

          <hr className="my-1" />

          <div className="flex items-center justify-between">
            <h2>Price: $ {product?.price}</h2>
            <div className="flex items-center gap-2">
              <p className="font-semibold">Quantity</p>
              <Button
                onClick={() => handleDecrementQuantity(product._id)}
                className="size-8 rounded-sm"
              >
                <Minus />
              </Button>
              <p className="font-semibold text-xl p-2">
                {product.orderQuantity}
              </p>
              <Button
                onClick={() => handleIncrementQuantity(product._id)}
                className="size-8 rounded-sm"
              >
                <Plus />
              </Button>

              <Button
                onClick={() => handleRemove(product._id)}
                variant="outline"
                className="size-8 rounded-sm ml-5"
              >
                <Trash className="text-red-500/50" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
