import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API = "https://6996e4647d1786436575a5f2.mockapi.io/users/";

// Async thunk for fetching users (GET)
export const FetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(API);
  const data = await response.json();
  console.log("FetchUsers data:", data);
  return data;
});

//Async thunk for Creating user (POST)
export const CreateUser = createAsyncThunk(
  "users/create",
  async (data, { rejectWithValue }) => {
    console.log("data:", data);
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error | error.message);
    }
  },
);

//Async thunk for Deleting user (DELETE)
export const DeleteUser = createAsyncThunk("users/delete", async (id) => {
  const response = await fetch(`${API}/${id}`, { method: "DELETE" });
  try {
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    throw error;
  }
});


/* ================= UPDATE USER ================= */
export const UpdateUser = createAsyncThunk(
  "user/update",
  async ({ id, updatedData, rejectWithValue }) => {
    const res = await fetch(
      `https://6996e4647d1786436575a5f2.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      },
    );
    try {
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

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
      // GET, FETCH
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
      // CreateUser,POST
      .addCase(CreateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(CreateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // DELETE
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
      })
      // PUT
      .addCase(UpdateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        );
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
