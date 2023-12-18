import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
// import { toast } from "react-toastify";

// userDashboard
export const getUserDashboard = createAsyncThunk(
  "user/userDashboard",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.userDashboard();
      return response?.data;
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

// add subscription
export const addSubscription = createAsyncThunk(
  "user/addSubscription",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addSubscription(data);
      return response?.data;
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

// get subscription
export const getSubscription = createAsyncThunk(
  "user/getSubscription",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getSubscription();
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

export const getLecturerList = createAsyncThunk(
  'user/getLecturerList',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getLecturer();
      return response?.data?.data?.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getLecturerDetails = createAsyncThunk(
  'user/getLecturerDetails',
  async (Id, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getLecturerDetails(Id);
      return response?.data?.data?.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  loading: false,
  userDashboard: {},
  subscriptions: [],
  lecturerList: [],
  lecturerDetails: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLecturerList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLecturerList.fulfilled, (state, action) => {
        state.loading = false;
        state.lecturerList = action.payload;
      })
      .addCase(getLecturerList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getLecturerDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLecturerDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.lecturerDetails = action.payload;
      })
      .addCase(getLecturerDetails.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUserDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.userDashboard = action.payload;
      })
      .addCase(getUserDashboard.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getSubscription.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscription.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload;
      })
      .addCase(getSubscription.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;