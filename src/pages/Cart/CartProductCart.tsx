import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ICartItem } from "@/redux/features/cart/cartSlice";
import { Minus, Plus, Trash } from "lucide-react";

export default function CartProductCard({ product }: { product: ICartItem }) {
  //   const dispatch = useAppDispatch();
  //   const handleRemove = () => {
  //     dispatch(removeFromCart());
  //   };
  console.log(product);

  return (
    <div className="grid grid-cols-12 gap-4">
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
          <h1 className="text-xl font-semibold">
            {product?.name}
            title
          </h1>
          <div className="flex gap-5 my-2">
            {/* <p>
            <span className="">Stock Availability:</span>{" "}
            <span className="font-semibold">{product?.status}</span>
          </p> */}
          </div>

          <hr className="my-1" />

          <div className="flex items-center justify-between">
            <h2>Price: $ {product?.price}</h2>
            <div className="flex items-center gap-2">
              <p className="font-semibold">Quantity</p>
              <Button
                // onClick={() => handleDecrementQuantity(product._id)}
                className="size-8 rounded-sm"
              >
                <Minus />
              </Button>
              <p className="font-semibold text-xl p-2">1</p>
              <Button
                // onClick={() => handleIncrementQuantity(product._id)}
                className="size-8 rounded-sm"
              >
                <Plus />
              </Button>

              <Button
                //   onClick={() => handleRemove()}
                variant="outline"
                className="size-8 rounded-sm ml-5"
              >
                <Trash className="text-red-500/50" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* address and order section */}
      <div className="col-span-4">
        <Card>
          <CardContent>
            <h1 className="text-2xl font-semibold py-2">Address</h1>
            <Textarea rows={5} />
            <Button className="mt-5">Order Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
