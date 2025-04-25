import CartProductCart from "@/pages/Cart/CartProductCart";

const CartPage = () => {
  //   const product = useAppSelector((state) => state.cart);
  return (
    <div className="py-5">
      {/* <div className="text-center pt-5">
        <p className="text-2xl font-bold text-orange-500">Cart is empty!!</p>

        <div className="flex justify-center items-center">
          <img src={emptyCart} alt="empty cart" width={400} height={400} />
        </div>
      </div> */}

      <CartProductCart />
    </div>
  );
};

export default CartPage;
