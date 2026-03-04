import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const API = "https://69a1c45f2e82ee536fa22b00.mockapi.io/product/";

// Thunk function to fetch products
export const GetProduct = createAsyncThunk(
  "product/GET",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

//DELETE
export const DeleteProduct = createAsyncThunk(
  "product/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

//POST
export const CreateProduct = createAsyncThunk(
  "product/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(API, data);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  },
);

//PUT
export const UpdateProduct = createAsyncThunk(
  "product/update",
  async ({id,data}, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API}${id}`, data)
      console.log(res)
      return res.data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(DeleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (product) => product.id !== action.payload,
        );
      })
      .addCase(DeleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(CreateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(CreateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default productSlice.reducer;
