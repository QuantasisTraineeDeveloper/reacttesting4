import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { toast } from "react-toastify";

// get all testimonials
export const getAllTestimonials = createAsyncThunk(
  "contact/getAllTestimonials",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getAllTestimonials();
      if (response.status === 200) {
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

// get singele testimonials
export const getSingleTestimonial = createAsyncThunk(
  "contact/getSingleTestimonial",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getSingleTestimonial();
      if (response.status === 200) {
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

// add testimonial
export const addTestimonial = createAsyncThunk(
  "contact/addTestimonial",
  async ({ data, setIsDisableTestimonial }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addTestimonial(data);
      if (response.status === 200) {
        dispatch(getSingleTestimonial());
        setIsDisableTestimonial(true);

        toast.success("Thanks for your review.", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "light",
        });
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

// update testimonial
export const updateTestimonial = createAsyncThunk(
  "contact/updateTestimonial",
  async ({ data, setIsDisableTestimonial }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateTestimonial(data);
      if (response.status === 200) {
        dispatch(getSingleTestimonial());
        setIsDisableTestimonial(true);
        // return response?.data?.data;
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

// approve testimonial
export const approveTestimonial = createAsyncThunk(
  "testimonial/approveTestimonial",
  async ({ testimonialID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.approveTestimonial(testimonialID);
      if (response?.data?.code === 200) {
        dispatch(getAllTestimonials());
      }
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

// delete testimonial
export const deleteTestimonial = createAsyncThunk(
  "testimonial/deleteTestimonial",
  async ({ testimonialID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteTestimonial(testimonialID);
      if (response?.data?.code === 200) {
        dispatch(getAllTestimonials());
      }
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
  submitLoading: false,
  allTestimonials: [],
  singleTestimonial: {},
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTestimonials.fulfilled, (state, action) => {
        state.allTestimonials = action.payload;
        state.loading = false;
      })
      .addCase(getAllTestimonials.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getSingleTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleTestimonial.fulfilled, (state, action) => {
        state.singleTestimonial = action.payload;
        state.loading = false;
      })
      .addCase(getSingleTestimonial.rejected, (state) => {
        state.loading = false;
      })

      .addCase(addTestimonial.pending, (state) => {
        state.submitLoading = true;
      })
      .addCase(addTestimonial.fulfilled, (state, action) => {
        state.submitLoading = false;
      })
      .addCase(addTestimonial.rejected, (state) => {
        state.submitLoading = false;
      })

      .addCase(updateTestimonial.pending, (state) => {
        state.submitLoading = true;
      })
      .addCase(updateTestimonial.fulfilled, (state, action) => {
        state.submitLoading = false;
      })
      .addCase(updateTestimonial.rejected, (state) => {
        state.submitLoading = false;
      });
  },
});

export default testimonialSlice.reducer;
