import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { errorMsg, successMsg } from "../components/AlertMessage";

// all comments
export const getAllComments = createAsyncThunk(
  "comment/getAllComments",
  async (lessonID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getAllComments(lessonID);
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
export const likeComments = createAsyncThunk(
  "comment/likeComments",
  async ({ lessonID, commentID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.likeComments(lessonID, commentID);
      if (response?.data?.code === 200) {
        dispatch(getAllComments(lessonID));
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
export const likeReply = createAsyncThunk(
  "comment/likeReply",
  async ({ lessonID, commentID, replyID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.likeReply(
        lessonID,
        commentID,
        replyID
      );
      if (response?.data?.code === 200) {
        dispatch(getAllComments(lessonID));
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

// add comment
export const addComment = createAsyncThunk(
  "comment/addComment",
  async ({ lessonID, data, onResetComment }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.addComment(lessonID, data);
      if (response?.data?.code === 200) {
        onResetComment();
        dispatch(getAllComments(lessonID));
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

// delete comment
export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async ({ lessonID, commentID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.deleteComment(lessonID, commentID);
      if (response?.data?.code === 200) {
        dispatch(getCourseComments(courseID));
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

// delete comment reply
export const deleteCommentReply = createAsyncThunk(
  "comment/deleteCommentReply",
  async (
    { lessonID, commentID, replyID, courseID },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.deleteCommentReply(
        lessonID,
        commentID,
        replyID
      );
      if (response?.data?.code === 200) {
        dispatch(getCommentReplies(courseID));
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

// approve comment
export const approveComment = createAsyncThunk(
  "comment/approveComment",
  async ({ lessonID, commentID, courseID }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.approveComment(lessonID, commentID);
      if (response?.data?.code === 200) {
        dispatch(getCourseComments(courseID));
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

// approve comment reply
export const approveReply = createAsyncThunk(
  "comment/approveReply",
  async (
    { lessonID, commentID, replyID, courseID },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.approveReply(
        lessonID,
        commentID,
        replyID
      );
      if (response?.data?.code === 200) {
        dispatch(getCommentReplies(courseID));
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

// add reply
export const addReply = createAsyncThunk(
  "comment/addReply",
  async (
    { lessonID, commentID, data, onResetReply },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.addReply(lessonID, commentID, data);
      if (response?.data?.code === 200) {
        onResetReply();
        dispatch(getAllComments(lessonID));
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

// get course comments
export const getCourseComments = createAsyncThunk(
  "comment/getCourseComments",
  async (courseID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getCourseComments(courseID);
      if (response.status === 200) {
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);

// get course replies
export const getCommentReplies = createAsyncThunk(
  "comment/getCommentReplies",
  async (courseID, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getCommentReplies(courseID);
      if (response.status === 200) {
        return response?.data?.data;
      }
    } catch (error) {
      errorMsg("Please try again.");
    }
  }
);
const initialState = {
  loading: false,
  replyLoading: false,
  allComments: [],
  singleCourseComments: [],
  commentReplies: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    resetComments(state, action) {
      state.allComments = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.allComments = action.payload;
        state.loading = false;
      })
      .addCase(getAllComments.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteComment.rejected, (state) => {
        state.loading = false;
      })

      .addCase(deleteCommentReply.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCommentReply.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteCommentReply.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addReply.pending, (state) => {
        state.replyLoading = true;
      })
      .addCase(addReply.fulfilled, (state, action) => {
        state.replyLoading = false;
      })
      .addCase(addReply.rejected, (state) => {
        state.replyLoading = false;
      })

      .addCase(getCourseComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseComments.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCourseComments = action.payload;
      })
      .addCase(getCourseComments.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getCommentReplies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentReplies.fulfilled, (state, action) => {
        state.loading = false;
        state.commentReplies = action.payload;
      })
      .addCase(getCommentReplies.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
export const { resetComments } = commentSlice.actions;
