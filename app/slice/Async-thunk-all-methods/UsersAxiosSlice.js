import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API = "https://jsonplaceholder.typicode.com/users/";

// GET USERS
export const GetUsers = createAsyncThunk(
  "user/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch data"
      );
    }
  },
);

// ------------------------------------------------------

const UsersAxiosSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    userById: null,
    isError: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false
      })
      .addCase(GetUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false
        state.data = action.payload;
      })
      .addCase(GetUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload
      });
  },
});

export const { selectUserById } = UsersAxiosSlice.actions;
export default UsersAxiosSlice.reducer;
