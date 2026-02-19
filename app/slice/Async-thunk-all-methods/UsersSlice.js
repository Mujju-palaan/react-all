import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for fetching users
export const FetchUsers = createAsyncThunk("Users/all", async () => {
  const response = await fetch(
    "https://6996e4647d1786436575a5f2.mockapi.io/users",
  );
  const data = await response.json();
  console.log("data:", data);
  return data;
});

//Async thunk for Creating user (POST)
export const CreateUser = createAsyncThunk("User/create", async (data, { rejectWithValue }) => {
  console.log("data:", data);
  response = await fetch("https://6996e4647d1786436575a5f2.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    result = await response.json()
    return result
  } catch (error) {
    console.log(error);
    return rejectWithValue(error)
  }
});

const userSlice = createSlice({
  name: "Users",
  initialState: {
    loading: false,
    data: [],
    search: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchUsers.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
