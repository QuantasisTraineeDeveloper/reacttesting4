import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { errorMsg, successMsg } from "../components/AlertMessage";
import { ApiRequests } from "../services/ApiRequest";

export const getAlljobsList = createAsyncThunk(
  "jobsListing/getAlljobsList",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      let reqOptions = {
        url: "http://localhost:8080/api/tansyacademy/jobsListing/",
        method: "GET",
      };
      const response = await axios.request(reqOptions);
      return response?.data?.data?.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  loading: false,
  alljobsList: [],
};

const jobsListingSlice = createSlice({
  name: "jobsListing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAlljobsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlljobsList.fulfilled, (state, action) => {
        state.loading = false;
        state.alljobsList = action.payload;
      })
      .addCase(getAlljobsList.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default jobsListingSlice.reducer;
