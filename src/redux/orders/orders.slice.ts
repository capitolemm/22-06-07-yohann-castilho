import { createSlice } from '@reduxjs/toolkit';

import { IOrders } from './orders.types';

const initialState: IOrders = [];

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload)
    },
  },
});

export const {  addOrder } =
  ordersSlice.actions;

export const orderReducer = ordersSlice.reducer;

export default ordersSlice;
