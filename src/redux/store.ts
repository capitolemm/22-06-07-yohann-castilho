import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cart.slice';
import { productsReducer } from './products/products.slice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
