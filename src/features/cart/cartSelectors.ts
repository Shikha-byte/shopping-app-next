import { RootState } from "@/redux/store";

// Select the entire cart
export const selectCartItems = (state: RootState) => state.cart.items;

// Check if a specific product is already in the cart
export const selectIsProductInCart = (productId: number) => (state: RootState) =>
  state.cart.items.some((item) => item.id === productId);

//Total items count
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Optional: Total price
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);