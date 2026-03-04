import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API = "https://69a1c45f2e82ee536fa22b00.mockapi.io/product/";

// GET
export const GetProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch data",
      );
    }
  },
);

// POST
export const CreateProducts = createAsyncThunk(
  "products/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to create product",
      );
    }
  },
);

// PUT
export const UpdateProducts = createAsyncThunk(
  "products/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API}${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to update product",
      );
    }
  },
);

// DELETE
export const DeleteProducts = createAsyncThunk(
  "products/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to delete product",
      );
    }
  },
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle", // idle | loading | succeeded | failed
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(GetProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // CREATE
      .addCase(CreateProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(CreateProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(CreateProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // UPDATE
      .addCase(UpdateProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(UpdateProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
      })
      .addCase(UpdateProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // DELETE
      .addCase(DeleteProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(DeleteProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((item) => item.id !== action.payload);
      })
      .addCase(DeleteProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default ProductsSlice.reducer;
