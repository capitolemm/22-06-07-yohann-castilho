import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart, ICartProduct } from './cart.types';

const initialState: ICart = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Pick<ICartProduct, 'id'>>) => {
      state[action.payload.id] = {
        id: action.payload.id,
        quantity: 1,
      };
    },
    removeProduct: (state, action: PayloadAction<Pick<ICartProduct, 'id'>>) => {
      delete state[action.payload.id];
    },
    updateProduct: (state, action: PayloadAction<ICartProduct>) => {
      state[action.payload.id].quantity = action.payload.quantity;
    },
    clearCart: () => {
      return {};
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export default cartSlice;
