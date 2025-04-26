import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useCreateProductMutation } from "@/redux/features/auth/admin/productManagement";
// import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateProduct = () => {
  // const [createProduct] = useCreateProductMutation();

  // const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  //   const productData = {
  //     ...data,
  //     name: "",
  //     brand: "",
  //     model: "",
  //     productImg: "",
  //     price: "",
  //     category: "",
  //     description: "",
  //     quantity: "",
  //     inStock: true,
  //   };
  // };

  return (
    <div className="justify-center items-center">
      <h1 className="flex justify-center text-3xl font-bold text-blue-500">
        Create Product
      </h1>

      <div className="max-w-sm items-center space-y-2">
        <form className="space-y-2">
          <Input type="email" placeholder="Item Name" />
          <Input type="email" placeholder="Price" />
          <Input type="email" placeholder="Quantity" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Create Product</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

// import { useForm, SubmitHandler } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { toast } from "sonner";

// import {
//   productCategoriesOptions,
//   productStockOptions,
// } from "@/constant/createProduct.constant";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { imageUpload } from "@/utils/uploadImage";
// import { useCreateProductMutation } from "@/redux/features/auth/authApi";

// type FormValues = {
//   name: string;
//   brand: string;
//   price: number;
//   category: string;
//   image: FileList;
//   description: string;
//   quantity: number;
//   inStock: string;
// };

// const CreateProduct = () => {
//   const [createProduct] = useCreateProductMutation();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     setValue,
//   } = useForm<FormValues>();

//   const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", data.name);
//       formData.append("brand", data.brand);
//       formData.append("price", data.price.toString());
//       formData.append("category", data.category);
//       formData.append("model", data.model);
//       formData.append("description", data.description);
//       formData.append("quantity", data.quantity.toString());
//       formData.append("inStock", String(data.inStock));

//       // This assumes you still have the file in a ref or state
//       const file = fileInputRef.current?.files?.[0];
//       if (file) {
//         formData.append("file", file);
//       }

//       const res = await createProduct(formData).unwrap();

//       if (res.success) {
//         toast.success(res.message);
//         form.reset();
//         setPreviewImage(null);
//       }
//     } catch (error: any) {
//       console.error("Failed to create product:", error);
//       toast.error(error?.data?.message || "Failed to create product");
//     }
//   };

//   return (
//     <div className="p-6 rounded-2xl bg-[#2F5233] text-white">
//       <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>

//       <div className="max-w-3xl mx-auto">
//         <Card className="p-6 bg-[#F5F1EA] text-black shadow-xl">
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <Label>Product Title</Label>
//                 <Input
//                   {...register("name", { required: "Product name is required" })}
//                   placeholder="Enter product title..."
//                 />
//                 {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//               </div>

//               <div>
//                 <Label>Brand</Label>
//                 <Input
//                   {...register("brand", { required: "Brand is required" })}
//                   placeholder="Enter brand name..."
//                 />
//                 {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
//               </div>

//               <div>
//                 <Label>Price ($)</Label>
//                 <Input
//                   type="number"
//                   step="0.01"
//                   {...register("price", {
//                     required: "Price is required",
//                     valueAsNumber: true,
//                   })}
//                   placeholder="Enter price..."
//                 />
//                 {errors.price && <p className="text-red-500">{errors.price.message}</p>}
//               </div>

//               <div>
//                 <Label>Category</Label>
//                 <Select onValueChange={(value) => setValue("category", value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {productCategoriesOptions.map((cat) => (
//                       <SelectItem key={cat.value} value={cat.value}>
//                         {cat.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label>Stock Status</Label>
//                 <Select onValueChange={(value) => setValue("inStock", value)}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select stock status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {productStockOptions.map((opt) => (
//                       <SelectItem key={String(opt.value)} value={String(opt.value)}>
//                         {opt.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label>Quantity</Label>
//                 <Input
//                   type="number"
//                   {...register("quantity", {
//                     required: "Quantity is required",
//                     valueAsNumber: true,
//                   })}
//                   placeholder="Enter quantity..."
//                 />
//                 {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
//               </div>

//               <div className="col-span-1 md:col-span-2">
//                 <Label>Product Image</Label>
//                 <Input
//                   type="file"
//                   accept="image/*"
//                   {...register("image", { required: "Product image is required" })}
//                 />
//                 {errors.image && (
//                   <p className="text-red-500">{errors.image.message as string}</p>
//                 )}
//               </div>

//               <div className="col-span-1 md:col-span-2">
//                 <Label>Description</Label>
//                 <Textarea
//                   {...register("description", {
//                     required: "Description is required",
//                   })}
//                   rows={4}
//                   placeholder="Enter product description..."
//                 />
//                 {errors.description && (
//                   <p className="text-red-500">{errors.description.message}</p>
//                 )}
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <Button
//                 type="submit"
//                 className="bg-[#FAAD14] text-[#281E35] hover:bg-[#e6a800] font-semibold rounded-xl px-6 py-3"
//               >
//                 Create Product
//               </Button>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default CreateProduct;
