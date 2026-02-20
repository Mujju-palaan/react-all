import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API = "https://6996e4647d1786436575a5f2.mockapi.io/users";

// Async thunk for fetching users (GET)
export const FetchUsers = createAsyncThunk("users/all", async () => {
  const response = await fetch(API);
  const data = await response.json();
  console.log("data:", data);
  return data;
});

//Async thunk for Creating user (POST)
export const CreateUser = createAsyncThunk("users/create", async (data) => {
  console.log("data:", data);
  try {
    const response = await fetch(API,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
});

//Async thunk for Deleting user (DELETE)
export const DeleteUser = createAsyncThunk("users/deleteuser", async (id) => {
  const response = await fetch(`${API}/${id}`, { method: "DELETE" });
  try {
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    throw error;
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
      })
      .addCase(CreateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(CreateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(DeleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(DeleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.data = state.data.filter((user) => user.id !== id);
        }
      })
      .addCase(DeleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
