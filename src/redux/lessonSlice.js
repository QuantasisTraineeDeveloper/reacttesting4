import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";

// add lesson
export const addLesson = createAsyncThunk(
  "lesson/addLesson",
  async ({ courseID, data }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addLesson(courseID, data);
      if (response.status === 200) {
        dispatch(getCourseLessons(courseID));
        successMsg("Lesson added!");
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg(error?.response?.data?.status);
      return rejectWithValue(error?.response?.data?.status);
    }
  }
);

// get lessons
export const getCourseLessons = createAsyncThunk(
  "lesson/getCourseLessons",
  async (courseID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getCourseLessons(courseID);
      return response?.data?.data?.results;
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

// get all lessons
export const getAllLessons = createAsyncThunk(
  "lesson/getAllLessons",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getAllLessons();
      return response?.data?.data?.results;
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

// get lesson details
export const getLessonDetails = createAsyncThunk(
  "lesson/getLessonDetails",
  async ({ courseID, lessonID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getLessonDetails(courseID, lessonID);
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

// edit lesson
export const editLesson = createAsyncThunk(
  "lesson/editLesson",
  async ({ courseID, lessonID, data }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.editLesson(courseID, lessonID, data);
      if (response.status === 200) {
        dispatch(getCourseLessons(courseID));
        successMsg("Lesson updated!");
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

// delete lessons
export const deleteCourseLesson = createAsyncThunk(
  "lesson/deleteCourseLesson",
  async ({ courseID, lessonID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteCourseLessons(
        courseID,
        lessonID
      );
      if (response.status === 200) {
        dispatch(getCourseLessons(courseID));
        successMsg("Topic removed!");
        return response?.data?.data;
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

// add lesson chapter
export const addLessonChapter = createAsyncThunk(
  "lesson/addNewLessonChapter",
  async (
    { courseID, lessonID, data, setAddChapter, onReset },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.addLessonChapter(
        courseID,
        lessonID,
        data
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson chapter added!");
        onReset();
        setAddChapter();
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

// delete lesson chapter
export const deleteLessonChapter = createAsyncThunk(
  "lesson/deleteLessonChapter",
  async ({ courseID, lessonID, chapterID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteLessonChapter(
        courseID,
        lessonID,
        chapterID
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson chapter removed!");
        return response?.data?.data;
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

// add lesson video
export const addLessonVideo = createAsyncThunk(
  "lesson/addLessonVideo",
  async (
    { courseID, lessonID, data, setUploadVideo, onReset },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.addLessonVideo(
        courseID,
        lessonID,
        data
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson video added!");
        setUploadVideo(false);
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

// delete lesson video
export const deleteLessonVideo = createAsyncThunk(
  "lesson/deleteLessonVideo",
  async ({ courseID, lessonID, videoID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteLessonVideo(
        courseID,
        lessonID,
        videoID
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson video removed!");
        return response?.data?.data;
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

// add lesson query
export const addLessonQuery = createAsyncThunk(
  "lesson/addLessonQuery",
  async (
    { courseID, lessonID, data, setUploadQuery, onReset },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.addLessonQuery(
        courseID,
        lessonID,
        data
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson video added!");
        onReset();
        setUploadQuery();
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

// delete lesson query
export const deleteLessonQuery = createAsyncThunk(
  "lesson/deleteLessonQuery",
  async ({ courseID, lessonID, queryID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteLessonQuery(
        courseID,
        lessonID,
        queryID
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson video removed!");
        return response?.data?.data;
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

// add lesson file
export const addLessonFile = createAsyncThunk(
  "lesson/addLessonFile",
  async ({ courseID, lessonID, data }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addLessonFile(
        courseID,
        lessonID,
        data,
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson file added!");
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

// most Visited lessons
export const getMostVisitedLessons = createAsyncThunk(
  "course/getMostVisitedLessons",
  async ({ courseID, lessonID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getRelatedLessons(courseID, lessonID);
      return response?.data?.data?.results;
    } catch (error) {
      return rejectWithValue("NetWork Error ");
    }
  }
);

// delete lesson query
export const deleteLessonFile = createAsyncThunk(
  "lesson/deleteLessonFile",
  async ({ courseID, lessonID, fileID, fileName, azureFolder }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteLessonFile(
        courseID,
        lessonID,
        fileID,
        fileName,
        azureFolder
      );
      if (response.status === 200) {
        dispatch(getLessonDetails({ courseID, lessonID }));
        successMsg("Lesson file removed!");
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
  mostVisitedLessons: [],
  lessonLoading: false,
  lessonVideoLoading: false,
  lessonQueryLoading: false,
  lessonFileLoading: false,
  courseLessons: [],
  lessonDetails: {},
  lessonsBy: [],
  allLessons: [],

  lessonID: ""
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    setLessonID(state, action) {
      state.lessonID = action.payload;
    },
    resetLessonDetails(state, action) {
      state.lessonDetails = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLesson.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.lessonLoading = false;
        state.lessonID = action.payload._id;
      })
      .addCase(addLesson.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(editLesson.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(editLesson.fulfilled, (state, action) => {
        state.lessonLoading = false;
      })
      .addCase(editLesson.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(getCourseLessons.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(getCourseLessons.fulfilled, (state, action) => {
        state.lessonLoading = false;
        state.courseLessons = action.payload;
      })
      .addCase(getCourseLessons.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(getMostVisitedLessons.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(getMostVisitedLessons.fulfilled, (state, action) => {
        state.lessonLoading = false;
        state.mostVisitedLessons = action.payload;
      })
      .addCase(getMostVisitedLessons.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(getAllLessons.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(getAllLessons.fulfilled, (state, action) => {
        state.lessonLoading = false;
        state.allLessons = action.payload;
      })
      .addCase(getAllLessons.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(getLessonDetails.pending, (state) => {
        state.lessonLoading = true;
      })
      .addCase(getLessonDetails.fulfilled, (state, action) => {
        state.lessonLoading = false;
        state.lessonDetails = action.payload;
      })
      .addCase(getLessonDetails.rejected, (state) => {
        state.lessonLoading = false;
      })

      .addCase(addLessonVideo.pending, (state) => {
        state.lessonVideoLoading = true;
      })
      .addCase(addLessonVideo.fulfilled, (state, action) => {
        state.lessonVideoLoading = false;
      })
      .addCase(addLessonVideo.rejected, (state) => {
        state.lessonVideoLoading = false;
      })

      .addCase(addLessonQuery.pending, (state) => {
        state.lessonQueryLoading = true;
      })
      .addCase(addLessonQuery.fulfilled, (state, action) => {
        state.lessonQueryLoading = false;
      })
      .addCase(addLessonQuery.rejected, (state) => {
        state.lessonQueryLoading = false;
      })

      .addCase(addLessonFile.pending, (state) => {
        state.lessonFileLoading = true;
      })
      .addCase(addLessonFile.fulfilled, (state, action) => {
        state.lessonFileLoading = false;
      })
      .addCase(addLessonFile.rejected, (state) => {
        state.lessonFileLoading = false;
      });
  }
});

export default lessonSlice.reducer;
export const { setLessonID, resetLessonDetails } = lessonSlice.actions;
