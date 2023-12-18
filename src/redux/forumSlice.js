import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";

// // all threads
// export const getAllThreads = createAsyncThunk(
//   "forum/getAllThreads",
//   async ({ courseID, search }, { dispatch, rejectWithValue }) => {
//     try {
//       const response = await (search === null || search === undefined
//         ? ApiRequests.getAllThreads(courseID, search)
//         : ApiRequests.searchThread(courseID, search));

//       return response?.data?.data;
//     } catch (error) {
//       // toast.error(error?.response?.data?.errors?.[0]?.msg, {
//       //   position: "top-right",
//       //   autoClose: 3000,
//       //   closeOnClick: true,
//       //   pauseOnHover: true,
//       //   theme: "light",
//       // });
//     }
//   }
// );

// all threads
export const getAllCourseThreads = createAsyncThunk(
  "forum/getAllCourseThreads",
  async ({ courseID, search = null }, { dispatch, rejectWithValue }) => {
    try {
      const response = await (search === null || search === undefined
        ? ApiRequests.getAllCourseThreads(courseID, search)
        : ApiRequests.searchThread(courseID, search));

      // const response = await ApiRequests.getAllCourseThreads(courseID);
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

// single thread
export const getSingleThread = createAsyncThunk(
  "forum/getSingleThread",
  async (threadID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getSingleThread(threadID);

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

// like single thread
export const likeThread = createAsyncThunk(
  "forum/likeThread",
  async (threadID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.likeThread(threadID);
      if (response?.data?.code === 200) {
        dispatch(getSingleThread(threadID));
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

// dislike single thread
export const disLikeThread = createAsyncThunk(
  "forum/disLikeThread",
  async (threadID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.disLikeThread(threadID);
      if (response?.data?.code === 200) {
        dispatch(getSingleThread(threadID));
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
// like single thread Reply
export const likeThreadReply = createAsyncThunk(
  "forum/likeThreadReply",
  async ({ threadID, replyId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.likeThreadReply(threadID, replyId);
      if (response?.data?.code === 200) {
        dispatch(getSingleThread(threadID));
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

// dislike single thread Reply
export const disLikeThreadReply = createAsyncThunk(
  "forum/disLikeThreadReply",
  async ({ threadID, replyId }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.disLikeThreadReply(threadID, replyId);
      if (response?.data?.code === 200) {
        dispatch(getSingleThread(threadID));
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

// approve thread
export const approveThread = createAsyncThunk(
  "forum/approveThread",
  async ({ threadID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.approveThread(threadID);
      if (response?.data?.code === 200) {
        dispatch(getAllCourseThreads({ courseID }));
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

// create thread
export const createThread = createAsyncThunk(
  "forum/createThread",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.createThread(data);
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

// delete thread
export const deleteThread = createAsyncThunk(
  "forum/deleteThread",
  async ({ threadID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteThread(threadID);
      if (response?.data?.code === 200) {
        dispatch(getAllCourseThreads({ courseID }));
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

// get thread answers
export const getForumAnswers = createAsyncThunk(
  "forum/getForumAnswers",
  async ({ courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getForumAnswers(courseID);
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

// delete thread answer
export const deleteForumAnswer = createAsyncThunk(
  "forum/deleteForumAnswer",
  async ({ threadID, answerID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteForumAnswer(threadID, answerID);
      if (response?.data?.code === 200) {
        dispatch(getForumAnswers({ courseID }));
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

// approve thread answer
export const approveForumAnswer = createAsyncThunk(
  "forum/approveForumAnswer",
  async ({ threadID, answerID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.approveForumAnswer(threadID, answerID);
      if (response?.data?.code === 200) {
        dispatch(getForumAnswers({ courseID }));
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
  allCourseThreads: [],
  allCourseThreadsReplies: [],
  singleThread: {},
  loading: false,
};

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllCourseThreads.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCourseThreads.fulfilled, (state, action) => {
        state.allCourseThreads = action.payload;
        state.loading = false;
      })
      .addCase(getAllCourseThreads.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getForumAnswers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getForumAnswers.fulfilled, (state, action) => {
        state.allCourseThreadsReplies = action.payload;
        state.loading = false;
      })
      .addCase(getForumAnswers.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getSingleThread.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleThread.fulfilled, (state, action) => {
        state.singleThread = action.payload;
        state.loading = false;
      })
      .addCase(getSingleThread.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createThread.pending, (state) => {
        state.loading = true;
      })
      .addCase(createThread.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createThread.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default forumSlice.reducer;
