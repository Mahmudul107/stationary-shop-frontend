import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { useAppDispatch } from "@/redux/hooks";
import { addToCart, ICartItem } from "@/redux/features/cart/cartSlice";
import cartImage from "@/assets/LeafandLine.png";

const ProductCard = ({ product }: { product: ICartItem }) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: ICartItem) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="">
      <Card className="bg-green-100">
        <CardHeader>
          <img src={cartImage} alt="product image" />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-5">{product.name}</CardTitle>
          <CardDescription>{product.name}</CardDescription>
          <p className="font-semibold mt-2">Price: $ {product.price}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            <NavLink to={`/product/${product._id}`}>
              <Button size="sm" className="rounded-full cursor-pointer">
                View Details
              </Button>
            </NavLink>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    className="w-8 h-8 p-0 flex items-center justify-center rounded-full cursor-pointer text-muted-foreground border-muted-foreground dark:text-white dark:border-slate-100 dark:hover:bg-orange-400"
                    variant="outline"
                    size="sm"
                    // disabled={product?.status === "availabel" ? true : false}
                    onClick={() => handleAddProduct(product)}
                  >
                    <ShoppingCart />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
