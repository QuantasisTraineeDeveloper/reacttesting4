import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";

// all tables
export const getQueryInfo = createAsyncThunk(
  "queryTool/getQueryInfo",
  async (db, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getQueryInfo(db);

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

// run query
export const runQuery = createAsyncThunk(
  "queryTool/runQuery",
  async ({ data, setErrorMessage }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.runQuery(data);
      if (response) {
        dispatch(setQuery(data?.query));
        setErrorMessage("");
      }
      return response?.data;
    } catch (error) {
      setErrorMessage(error?.response?.data?.data?.message);
      // errorMsg("Invalid Query!");
      return error?.response?.data;
    }
  }
);

const initialState = {
  allTables: [],
  queryResult: {},
  query: null,
  loading: false,
  runQueryLoading: false,
};

const queryToolSlice = createSlice({
  name: "queryTool",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getQueryInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQueryInfo.fulfilled, (state, action) => {
        state.allTables = action.payload;
        state.loading = false;
      })
      .addCase(getQueryInfo.rejected, (state) => {
        state.loading = false;
      })

      .addCase(runQuery.pending, (state) => {
        state.runQueryLoading = true;
      })
      .addCase(runQuery.fulfilled, (state, action) => {
        state.queryResult = action.payload;
        state.runQueryLoading = false;
      })
      .addCase(runQuery.rejected, (state) => {
        state.runQueryLoading = false;
      });
  },
});

export default queryToolSlice.reducer;
export const { setQuery } = queryToolSlice.actions;
