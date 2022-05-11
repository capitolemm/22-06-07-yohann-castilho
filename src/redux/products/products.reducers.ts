import { PayloadAction } from '@reduxjs/toolkit';

import { IProducts, IProductsData } from './products.types';

export const addProducts = (
  state: IProducts,
  action: PayloadAction<IProductsData>
) => {
  state.data = action.payload;
};

const productsReducers = {
  addProducts,
};

export default productsReducers;
