import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("http://localhost:5000/products");
    return response.json();
  }
);
