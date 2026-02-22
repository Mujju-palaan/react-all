import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const API = "https://6996e4647d1786436575a5f2.mockapi.io/usernames/";

//GET
export const FetchUsername = createAsyncThunk(
  "username/fetch",
  async (rejectWithValue) => {
    const response = await fetch(API);
    try {
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

//DELETE
export const DeleteUsername = createAsyncThunk(
  "username/delete",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`${API}${id}`, { method: "DELETE" });
    try {
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message | error);
    }
  },
);

//POST
// POST
export const CreateUsername = createAsyncThunk(
  "username/create",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to create user");
      }

      const data = await response.json();
      console.log("created user:", data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Network error");
    }
  }
);

const usernameSlice = createSlice({
  name: "username",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsername.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(FetchUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(FetchUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(DeleteUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((user) => user.id !== action.payload.id);
      })
      .addCase(DeleteUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(CreateUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(CreateUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default usernameSlice.reducer;
