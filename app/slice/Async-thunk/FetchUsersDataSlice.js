import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  data: [],
  isError: false,
};

export const FetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log("response:", response.json());
  return response.json();
});

const FetchUsersDataSlice = createSlice({
  name: "FetchUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(FetchUsers.rejected, (state, action) => {
        console.log("Error :", action.payload);
        state.isError = true;
      });
  },
});

export default FetchUsersDataSlice.reducer;
