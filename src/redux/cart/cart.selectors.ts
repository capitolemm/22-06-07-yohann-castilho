import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';

export const selectCart = (state: RootState) => state.cart;

export const selectNumProducts = createSelector(selectCart, (cart) =>
  Object.values(cart).reduce((total, product) => total + product.quantity, 0)
);
