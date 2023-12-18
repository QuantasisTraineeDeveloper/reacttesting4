import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { getSingleCourse } from "./courseSlice";
import { errorMsg, successMsg } from "../components/AlertMessage";

// add chapter in courses
export const addChapter = createAsyncThunk(
  "chapter/addChapter",
  async ({ chapterData, onReset }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addChapter(chapterData);
      if (response?.status === 200) {
        dispatch(getSingleCourse(chapterData?.courseId));
        successMsg("New chapter added!");
        onReset();
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Something went wrong!");
    }
  }
);

// update chapter in courses
export const updateChapter = createAsyncThunk(
  "chapter/updateChapter",
  async ({ chapterData, setIsModalOpen }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateChapter(chapterData);
      if (response?.status === 200) {
        dispatch(getSingleCourse(chapterData?.courseId));
        setIsModalOpen(false);
        successMsg("Chapter Updated!");

        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Something went wrong!");
    }
  }
);

// add chapter in courses
export const removeChapter = createAsyncThunk(
  "chapter/removeChapter",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.removeChapter(data);
      if (response.status === 200) {
        dispatch(getSingleCourse(data?.courseId));
        successMsg("Chapter removed!");
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Something went wrong!");
    }
  }
);

const initialState = {
  chapterLoading: false,
};

const chapterSlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addChapter.pending, (state) => {
        state.chapterLoading = true;
      })
      .addCase(addChapter.fulfilled, (state, action) => {
        state.chapterLoading = false;
      })
      .addCase(addChapter.rejected, (state) => {
        state.chapterLoading = false;
      })

      .addCase(updateChapter.pending, (state) => {
        state.chapterLoading = true;
      })
      .addCase(updateChapter.fulfilled, (state, action) => {
        state.chapterLoading = false;
      })
      .addCase(updateChapter.rejected, (state) => {
        state.chapterLoading = false;
      })

      .addCase(removeChapter.pending, (state) => {
        state.chapterLoading = true;
      })
      .addCase(removeChapter.fulfilled, (state, action) => {
        state.chapterLoading = false;
      })
      .addCase(removeChapter.rejected, (state) => {
        state.chapterLoading = false;
      });
  },
});

export default chapterSlice.reducer;
