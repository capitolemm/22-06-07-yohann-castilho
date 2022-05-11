import { createSlice } from '@reduxjs/toolkit';

import { getProducts } from './products.thunks';
import { IProducts } from './products.types';

const initialState: IProducts = { data: {}, status: 'PENDING' };

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.data = initialState.data;
      state.status = 'PENDING';
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'SUCCESS';
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = 'ERROR';
    });
  },
});

export const productsReducer = productsSlice.reducer;

export default productsSlice;
