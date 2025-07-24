import { useSelector } from "react-redux";
import { CartItem } from "@/features/cart/cartSlice";
import Layout from "@/components/Layout";
import { selectCartItems } from "@/features/cart/cartSelectors";

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const platformFee = 20;
  const finalAmount = totalPrice + platformFee;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT: Cart Items */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold mb-4">Your Shopping Bag</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your bag is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item: CartItem) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-semibold text-blue-600">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT: Summary Panel */}
        <div className="border p-4 rounded-lg shadow-md bg-gray-50 h-fit">
          <h2 className="text-xl font-bold mb-4">Price Details ({cartItems.length} Item)</h2>
          <div className="flex justify-between mb-2">
            <span>Total Quantity</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total Price</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-pink-700 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </Layout>
  );
}
