import ProductCard from "@/components/Shared/ProductCard";
import Loading from "@/components/spinner/loading";
import { useGetAllProductsQuery } from "@/redux/features/auth/admin/productManagement";
import { TProduct } from "@/types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ICartItem } from "@/redux/features/cart/cartSlice";

const Products = () => {
  const { isLoading, data } = useGetAllProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const products: TProduct = data?.data || [];

  return (
    <div>
      <Navbar />
      <div className="py-5">
        <h1 className="font-extrabold text-5xl uppercase flex justify-center py-5 text-green-900">
          Our products
        </h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="max-w-6xl mx-auto px-4 mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products?.map((product: ICartItem) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
