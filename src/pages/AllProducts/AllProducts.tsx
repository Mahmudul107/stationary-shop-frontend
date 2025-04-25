import ProductCard from "@/components/Shared/ProductCard";
import Loading from "@/components/spinner/loading";
import { useGetAllProductsQuery } from "@/redux/features/auth/admin/productManagement";
import { TProduct } from "@/types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-center">
            {products?.map((product: TProduct, idx: number) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
