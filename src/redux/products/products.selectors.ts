import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';

export const selectProducts = (state: RootState) => state.products;

export const selectProductsData = createSelector(
  selectProducts,
  (products) => products.data
);

export const selectProductsStatus = createSelector(
  selectProducts,
  (products) => products.status
);
