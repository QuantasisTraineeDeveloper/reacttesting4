import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
// import { toast } from "react-toastify";

// searchTool
export const searchTool = createAsyncThunk(
  "auth/searchTool",
  async ({ data, navigate }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.searchTool(data);
      navigate("/result");
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
  searchResults: [],
};

const toolSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchTool.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchTool.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchTool.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default toolSlice.reducer;
