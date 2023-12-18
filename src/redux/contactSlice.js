import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";

// contact us
export const submitContactUs = createAsyncThunk(
  "contact/submitContactUs",
  async (
    { values, setIsModalOpen, onReset },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.submitContactUs(values);
      if (response.status === 200) {
        setIsModalOpen(true);
        onReset();
        return response?.data?.data;
      }
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
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitContactUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitContactUs.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(submitContactUs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default contactSlice.reducer;
