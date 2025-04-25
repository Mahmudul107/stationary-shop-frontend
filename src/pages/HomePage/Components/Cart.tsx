import CartProductCart from "@/pages/Cart/CartProductCart";
import Footer from "@/pages/Footer/Footer";
import Navbar from "@/pages/Navbar/Navbar";
import {
  ICartItem,
  orderedProductsSelector,
} from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const CartPage = () => {
  const products = useAppSelector(orderedProductsSelector);
  return (
    <div>
      <Navbar />
      <div className="pt-5 container mx-auto">
        {products.length === 0 && (
          <div className="text-center pt-5">
            <p className="text-2xl font-bold text-orange-500">
              Cart is empty!!
            </p>

            <div className="flex justify-center items-center">
              <img src="" alt="empty cart" width={400} height={400} />
            </div>
          </div>
        )}
        {products.map((product: ICartItem) => (
          <CartProductCart key={product._id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
