import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "@/redux/features/auth/admin/productManagement";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Loading from "@/components/spinner/loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICartItem } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { Delete, Edit } from "lucide-react";

const defaultImage =
  "https://images.unsplash.com/photo-1568246387285-527f42cd0833?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ViewProduct = () => {
  const { data, isLoading, error } = useGetAllProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (productId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      await deleteProduct(productId).unwrap();
      toast.success("Product deleted successfully");
    } catch {
      toast.error("Failed to delete product");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-center text-red-600">Error fetching products</p>;
  }

  const products = data?.data || [];

  return (
    <div className="py-10 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-extrabold text-4xl text-green-900 text-center mb-8">
          All Products
        </h1>

        <Table>
          <TableCaption>A list of all products.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product: ICartItem) => (
              <TableRow
                key={product._id}
                className="border-b hover:bg-green-50 transition duration-300 ease-in-out"
              >
                <TableCell>
                  <img
                    src={product.imageUrl || defaultImage}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-full shadow-md"
                  />
                </TableCell>

                {/* Product Name */}
                <TableCell className="text-lg font-medium text-gray-800">
                  {product.name}
                </TableCell>
                <TableCell className="text-green-600 font-semibold">
                  ${product.price}
                </TableCell>
                <TableCell className="text-center">
                  {product.quantity}
                </TableCell>
                {/* Actions */}
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-3">
                    <Link to={`/admin/product/update/${product._id}`}>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full transition duration-300">
                        <Edit/>
                      </Button>
                    </Link>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-300"
                      onClick={() => handleDelete(product._id)}
                    >
                      <Delete/>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewProduct;
