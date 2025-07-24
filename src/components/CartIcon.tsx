import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";
import { selectCartCount } from "@/features/cart/cartSelectors";
import Link from "next/link";

const CartIcon = () =>{
    const cartCount = useSelector(selectCartCount);
    return (
    <Link href="/checkout/cart">
      <div className="relative cursor-pointer">
        <ShoppingBag className="w-6 h-6 text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;