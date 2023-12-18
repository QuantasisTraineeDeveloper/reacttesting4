import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
// import { toast } from "react-toastify";

// adminDashboard
export const getAdminDashboard = createAsyncThunk(
  "admin/adminDashboard",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.adminDashboard();
      return response?.data?.data;
    } catch (error) {
      // toast.error(error?.response?.data?.errors?.[0]?.msg, {
      //   position: "top-right",
      //   autoClose: 3000,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   theme: "light",
      // });
    }
  }
);

const initialState = {
  loading: false,
  adminDashboard: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAdminDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.adminDashboard = action.payload;
      })
      .addCase(getAdminDashboard.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default adminSlice.reducer;
