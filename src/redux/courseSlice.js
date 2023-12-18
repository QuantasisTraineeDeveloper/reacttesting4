import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";
import { getUserDashboard } from "./userSlice";
import { getCourseLessons } from "./lessonSlice";
// all courses
export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async (search, { dispatch, rejectWithValue }) => {
    try {
      const response = await (search === null || search === undefined
        ? ApiRequests.getAllCourses(search)
        : ApiRequests.searchCourses(search));

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

// admin courses
export const getAdminCourses = createAsyncThunk(
  "course/getAdminCourses",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getAdminCourses();
      return response?.data?.data?.results;
    } catch (error) {
      return error?.response?.data;
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

// Current Selected Course
export const currentSelectedCourse = createAsyncThunk(
  "/course/currentSelectedCourse",
  async (current, { dispatch, rejectWithValue }) => {
    try {
      return current;
    } catch (error) {
      console.log(error);
    }
  }
);

export const imageURLUpdateCourse = createAsyncThunk(
  "/course/imageURLUpdateCourse",
  async (current, { dispatch, rejectWithValue }) => {
    try {
      return current;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCourseDetailFileURL = createAsyncThunk(
  "/course/getCourseDetailFileURL",
  async ({fileName, fileType}, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.generateDownloadURL({fileName, fileType});
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }
);

// courses tags
export const getCoursesTags = createAsyncThunk(
  "course/getCoursesTags",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getCoursesTags();
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

// single course
export const getSingleCourse = createAsyncThunk(
  "course/getSingleCourse",
  async (courseID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getSingleCourse(courseID);
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

// add course
export const addCourse = createAsyncThunk(
  "course/addCourse",
  async ({ courseData, onReset, navigate }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addCourse(courseData);
      navigate("/admin/courses");
      successMsg("New course added!");
      onReset();
      return response?.data?.data;
    } catch (error) {
      errorMsg(
        "Please check your form, try to change the short name and sumbmit again."
      );
    }
  }
);

// update course
export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async ({ courseData, courseId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateCourse(courseData, courseId);
      successMsg("Course updated!");
      return response?.data?.data;
    } catch (error) {
      errorMsg(
        "Please check your form, try to change the short name and sumbmit again."
      );
    }
  }
);

//delele course
export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (courseID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteCourse(courseID);
      successMsg("Course deleted!");
      dispatch(getAdminCourses());
      return response?.data?.data;
    } catch (error) {
      errorMsg("Something went wrong!");
    }
  }
);

// get course review
export const courseReviews = createAsyncThunk(
  "course/courseReviews",
  async (courseId, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.courseReviews(courseId);
      return response?.data?.data;
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);

// get courses ID
export const getCourseID = createAsyncThunk(
  "course/getCourseID",
  async ({ data }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getCourseID(data);
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

// get random courses
export const getRandomCourse = createAsyncThunk(
  "course/getRandomCourse",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.randomCourse();
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

// enroll course
export const enrollCourse = createAsyncThunk(
  "course/enrollCourse",
  async ({ courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.enrollCourse(courseID);
      if (response.status === 200) {
        localStorage.removeItem("courseId");
        dispatch(getSingleCourse(courseID?.courseId));
        dispatch(getUserDashboard());
        successMsg("Successfully Enrolled!");
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);

// add course rating
export const addCourseRating = createAsyncThunk(
  "course/addCourseRating",
  async ({ courseID, ratingData }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addCourseRating(courseID, ratingData);
      if (response.status === 200) {
        // dispatch(getSingleCourse(courseID));
        // dispatch(getUserDashboard());
        successMsg("Rating Successfully Updated!");
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);

// marked as completed
export const markedCompleted = createAsyncThunk(
  "course/markedCompleted",
  async ({ courseID, markedData }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.markedCompleted(courseID, markedData);
      if (response.status === 200) {
        dispatch(getCourseLessons(courseID));
        // dispatch(getUserDashboard());
        // successMsg("Rating Successfully Updated!");
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);

const initialState = {
  courseLoading: false,
  randomCourseLoading: false,
  enrollLoading: false,
  allCourses: {},
  adminCourses: [],
  singleCourse: {},
  tags: [],
  singleCourseReviews: [],
  cid: {},
  randomCourse: [],
  currentSelectedCourseName: "",
  courseDetailFileURL:"",
  imageURLUpdateCourseArray: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    resetCourse(state) {
      state.singleCourse = {};
    },
    resetCourseID(state) {
      state.cid = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.allCourses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(getRandomCourse.pending, (state) => {
        state.randomCourseLoading = true;
      })
      .addCase(getRandomCourse.fulfilled, (state, action) => {
        state.randomCourseLoading = false;
        state.randomCourse = action.payload;
      })
      .addCase(getRandomCourse.rejected, (state) => {
        state.randomCourseLoading = false;
      })

      .addCase(getCourseID.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(getCourseID.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.cid = action.payload;
      })
      .addCase(getCourseID.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(getAdminCourses.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(getAdminCourses.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.adminCourses = action.payload;
      })
      .addCase(getAdminCourses.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(currentSelectedCourse.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(currentSelectedCourse.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.currentSelectedCourseName = action.payload;
      })
      .addCase(currentSelectedCourse.rejected, (state) => {
        state.courseLoading = false;
      })
      .addCase(imageURLUpdateCourse.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(imageURLUpdateCourse.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.imageURLUpdateCourseArray = action.payload;
      })
      .addCase(imageURLUpdateCourse.rejected, (state) => {
        state.courseLoading = false;
      })
      .addCase(getCourseDetailFileURL.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(getCourseDetailFileURL.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.courseDetailFileURL = action.payload;
      })
      .addCase(getCourseDetailFileURL.rejected, (state) => {
        state.courseLoading = false;
      })
      .addCase(addCourse.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courseLoading = false;
      })
      .addCase(addCourse.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(enrollCourse.pending, (state) => {
        state.enrollLoading = true;
      })
      .addCase(enrollCourse.fulfilled, (state, action) => {
        state.enrollLoading = false;
      })
      .addCase(enrollCourse.rejected, (state) => {
        state.enrollLoading = false;
      })

      .addCase(updateCourse.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.courseLoading = false;
      })
      .addCase(updateCourse.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(courseReviews.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(courseReviews.fulfilled, (state, action) => {
        state.singleCourseReviews = action.payload;
        state.courseLoading = false;
      })
      .addCase(courseReviews.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(getSingleCourse.pending, (state) => {
        state.courseLoading = true;
      })
      .addCase(getSingleCourse.fulfilled, (state, action) => {
        state.courseLoading = false;
        state.singleCourse = action.payload;
      })
      .addCase(getSingleCourse.rejected, (state) => {
        state.courseLoading = false;
      })

      .addCase(getCoursesTags.fulfilled, (state, action) => {
        state.tags = action.payload;
      })
      .addCase(getCoursesTags.rejected, (state) => {});
  },
});

export default courseSlice.reducer;
export const { resetCourse, resetCourseID } = courseSlice.actions;
