import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/spinner/loading";
import { toast } from "sonner";
import { useGetProductQuery, useUpdateProductMutation } from "@/redux/features/auth/admin/productManagement";

interface ProductFormData {
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

const UpdateProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetProductQuery(productId);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  useEffect(() => {
    if (data?.data) {
      reset({
        name: data.data.name,
        price: data.data.price,
        quantity: data.data.quantity,
        imageUrl: data.data.imageUrl,
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData: ProductFormData) => {
    try {
      await updateProduct({ productId, ...formData }).unwrap();
      toast.success("Product updated successfully!");
      navigate("/admin/products");
    } catch {
      toast.error("Failed to update product.");
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Failed to load product.</p>;

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Name</label>
          <Input
            {...register("name", { required: "Product name is required" })}
            placeholder="Enter product name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price ($)</label>
          <Input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be positive" },
            })}
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Quantity</label>
          <Input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "At least 1 item is required" },
            })}
            placeholder="Enter quantity"
          />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
        </div>

        {/* Image Preview */}
        {data?.data?.imageUrl && (
          <div className="text-center">
            <img
              src={data.data.imageUrl}
              alt={data.data.name}
              className="mx-auto h-32 w-32 object-cover rounded-full shadow"
            />
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isUpdating}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
        >
          {isUpdating ? "Updating..." : "Update Product"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateProduct;
