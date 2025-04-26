import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "@/redux/features/auth/admin/productManagement";
import Loading from "@/components/spinner/loading";
import { Button } from "@/components/ui/button";

const ViewDetails = () => {
  const { productId } = useParams();
  const { data, isLoading, error } = useGetProductQuery(productId);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p className="text-center text-red-600">Error fetching product details</p>
    );
  }

  const product = data?.data;

  if (!product) {
    return <p className="text-center text-red-600">Product not found</p>;
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-extrabold text-4xl text-green-900 text-center mb-8">
          {product.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <div className="w-full max-w-md p-4 rounded-xl shadow-lg bg-white">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg w-full h-auto object-cover shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-green-700">
                Price: ${product.price}
              </h2>
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8 flex gap-6">
              <Button className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full transition transform hover:scale-105">
                Add to Cart
              </Button>
              <Link to="/products">
                <Button className="bg-transparent border-2 bg-green-700 hover:bg-green-800 py-3 px-8 rounded-full transition transform hover:scale-105">
                  Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
