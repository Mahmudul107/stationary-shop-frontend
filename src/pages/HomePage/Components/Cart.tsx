import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import CartProductCart from "@/pages/Cart/CartProductCart";
import Footer from "@/pages/Footer/Footer";
import Navbar from "@/pages/Navbar/Navbar";
import { useCreateOrderMutation } from "@/redux/features/auth/admin/orderManagement";
import {
  addressSelector,
  ICartItem,
  orderedProductsSelector,
  orderSelector,
  subTotalSelector,
  updateAddress,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { toast } from "sonner";

export default function CartPage() {
  const products = useAppSelector(orderedProductsSelector);
  const subTotal = useAppSelector(subTotalSelector);
  const dispatch = useAppDispatch();

  const cartData = useAppSelector((state) => state.cart);

  const handleAddress = (address: string) => {
    dispatch(updateAddress(address));
  };

  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  const handleOrder = async () => {
    await createOrder({ products: cartData.items });
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 pt-5 container mx-auto">
        <div className="col-span-1 md:col-span-8">
          {products.map((product: ICartItem) => (
            <CartProductCart key={product._id} product={product} />
          ))}
        </div>
        {/* address and order section */}
        <div className="col-span-1 md:col-span-4">
          <Card>
            <CardContent>
              <h1 className="text-2xl text-center font-semibold pt-2">
                Address
              </h1>
              <p className="text-center mb-3">Enter your shipping address</p>
              <Textarea
                onChange={(e) => handleAddress(e.target.value)}
                rows={5}
              />
              <div className="flex justify-between mt-10 mb-5">
                <p className="text-gray-500 font-semibold">Grand Total</p>
                <p className="font-semibold">
                  {subTotal}
                  {/* {currencyFormatter(grandTotal)} */}
                </p>
              </div>
              <Button onClick={handleOrder} className="mt-5 w-full">
                Order Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
