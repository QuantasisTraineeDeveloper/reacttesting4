import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiRequests } from "../services/ApiRequest";
import { fireBaseLogout } from "../firebase";
// import { toast } from "react-toastify";

// login
export const login = createAsyncThunk(
  "auth/login",
  async (
    { formData, navigate, searchParams },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const response = await ApiRequests.login(formData);
      if (response.status === 200) {
        localStorage.setItem("authUser", JSON.stringify(response?.data?.data)); //setting user
        if (response?.data?.data?.admin) {
          if (searchParams.get("returnURL")) {
            navigate(searchParams.get("returnURL"));
          } else {
            navigate("/admin/dashboard");
          }
        } else {
          if (searchParams.get("returnURL")) {
            navigate(searchParams.get("returnURL"));
          } else {
            navigate("/user/dashboard");
          }
        }
      }

      // return response?.data?.data;
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

// getUserProfile
export const getUserProfile = createAsyncThunk(
  "auth/getUserProfile",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.getUserProfile();
      return response?.data?.data;
    } catch (error) {
      if (
        error?.response?.data?.code === 403 ||
        error?.response?.data?.code === 401
      ) {
        dispatch(logout());
      }
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

// updateUserProfile
export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ formData, setIsDisable }, { dispatch, rejectWithValue }) => {
    try {
      const response = await ApiRequests.updateUserProfile(formData);
      if (response.status === 200) {
        dispatch(getUserProfile());
        setIsDisable(true);
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
  profileLoading: false,
  updateProdileLoading: false,
  userProfile: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, { payload }) {
      fireBaseLogout();
      localStorage.removeItem("authUser");
      localStorage.removeItem("courseId");
      state.userProfile = {};
      payload.navigate("/");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.profileLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.profileLoading = false;
      })

      .addCase(updateUserProfile.pending, (state) => {
        state.updateProdileLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.updateProdileLoading = false;
      })
      .addCase(updateUserProfile.rejected, (state) => {
        state.updateProdileLoading = false;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
