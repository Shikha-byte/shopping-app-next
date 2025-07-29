import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  loading:boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading:false,
  error: null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCartRequest(state, action: PayloadAction<CartItem>) {
      state.loading = true;
      state.error = null;
    },

    addToCartSuccess(state, action: PayloadAction<CartItem>){
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if(existingItem){
        existingItem.quantity += 1;
      }else{
        state.items.push(action.payload);
      }
      state.loading = false
    },

    addToCartFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  removeItem,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
