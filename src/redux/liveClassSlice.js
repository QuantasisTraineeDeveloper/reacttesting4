import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorMsg, successMsg } from "../components/AlertMessage";
import { ApiRequests } from "../services/ApiRequest";

export const getAllLiveClasses = createAsyncThunk(
  "liveClass/getAllLiveClasses",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getAllLiveClasses();
      return response?.data?.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getSingleLiveClasses = createAsyncThunk(
  "liveClass/getSingleLiveClasses",
  async (classId, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getSingleLiveClasses(classId);
      return response?.data?.data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : "An error occurred";
      return rejectWithValue(errorMessage);
    }
  }
);

export const addLiveClasses = createAsyncThunk(
  "liveClass/addLiveClasses",
  async ({ formDataObject, onReset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addLiveClasses(formDataObject);
      successMsg("New LiveClasses Added!");
      onReset();
      return response?.data?.data;
    } catch (error) {
      errorMsg("Please check your form, try to change the short name and submit again.");
      throw error;
    }
  }
);

export const updateStudentData = createAsyncThunk(
  "liveClass/updateStudentData",
  async ({ updatedData,classId, onReset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateStudentData(updatedData);
      successMsg("New LiveClasses Added!");
      dispatch(getSingleLiveClasses(classId));
      onReset();
      return response?.data;
    } catch (error) {
      errorMsg("Please check your form, try to change the short name and submit again.");
      throw error;
    }
  }
);

export const updateLessonCompletion = createAsyncThunk(
  "liveClass/updateLessonCompletion",
  async ({ updatedData,classId, onReset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateLessonCompletion(updatedData);
      successMsg("New LiveClasses Added!");
      dispatch(getSingleLiveClasses(classId));
      onReset();
      return response?.data;
    } catch (error) {
      errorMsg("Please check your form, try to change the short name and submit again.");
      throw error;
    }
  }
);

export const removeLiveClass = createAsyncThunk(
  "liveClass/removeLiveClass",
  async ({ Id }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.removeLiveClass(Id);
      if (response.status === 200) {
        successMsg("Live Class Deleted!");
        dispatch(getAllLiveClasses());
        return response?.data?.data;
      }
    }
    catch (error) {
      errorMsg("An error occurred while deleting the Live Class.");
      throw error;
    }
  }
);


export const joinLiveClass = createAsyncThunk(
  'liveClass/joinLiveClass',
  async ({ dataObject, onReset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.joinLiveClass(dataObject);
      if (response?.data?.code === 201) {
        successMsg(response?.data?.status);
        dispatch(getAllLiveClasses());
        return response?.data;
      }
      onReset();
    } catch (error) {
      const errorCode = error?.response?.data?.code;
      const errorMessage = error?.response?.data?.status;

      if (errorCode === 400) {
        successMsg(errorMessage);
      } else {
        errorMsg(errorMessage);
      }
      return error?.response?.data;
    } finally {
      onReset();
    }
  }
);

const initialState = {
  loading: false,
  allLiveClasses: {},
  singleLiveClasses: [],
  enrollingLiveClass: null,
};

const liveClassSlice = createSlice({
  name: "liveClass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(joinLiveClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(joinLiveClass.fulfilled, (state, action) => {
        state.loading = false;
        state.enrollingLiveClass = action.payload;
      })
      .addCase(joinLiveClass.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAllLiveClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllLiveClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.allLiveClasses = action.payload;
      })
      .addCase(getAllLiveClasses.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getSingleLiveClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleLiveClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.singleLiveClasses = action.payload;
      })
      .addCase(getSingleLiveClasses.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addLiveClasses.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLiveClasses.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addLiveClasses.rejected, (state) => {
        state.loading = false;
      })
      .addCase(removeLiveClass.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeLiveClass.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeLiveClass.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default liveClassSlice.reducer;
