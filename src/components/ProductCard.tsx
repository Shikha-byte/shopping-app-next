import { Product } from "@/types/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from "@/features/cart/cartSlice";
import { selectCartItems, selectIsProductInCart } from "@/features/cart/cartSelectors";
import { useRouter } from "next/router";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  //const cartItems = useSelector(selectCartItems);

  //const isInCart = cartItems.some((item) => item.id === product.id);
  const isInCart = useSelector(selectIsProductInCart(product.id));
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents triggering navigation
    if (!isInCart) {
      dispatch(addToCartRequest({ ...product }));
    } else {
      router.push("/checkout/cart");
    }
  };

  const goToDetails = () => {
    router.push(`/detail/${product.id}`);
  };

  return (
    <div
      onClick={goToDetails}
      className="border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain p-4"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <p className="font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>

        <button
          onClick={handleAddToCart}
          className={`mt-4 w-full py-2 rounded-lg text-white text-sm font-medium transition ${
            isInCart ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isInCart ? "Go to Bag" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
