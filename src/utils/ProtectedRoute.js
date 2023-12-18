import { Outlet, Navigate } from "react-router-dom";
// import { getUserProfile } from "../redux/authSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const ProtectedRoute = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const authUser = JSON.parse(localStorage.getItem("authUser"));
  //   const token = authUser?.["token"];
  //   if (token) {
  //     dispatch(getUserProfile());
  //   }
  // }, [navigate, dispatch]);

  const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
  return authUser?.token ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
