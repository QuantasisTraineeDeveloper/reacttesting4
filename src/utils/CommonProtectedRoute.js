import { Outlet, Navigate, useLocation } from "react-router-dom";

const CommonProtectedRoute = () => {
  const location = useLocation();
  const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
  return authUser?.token ? (
    <Outlet />
  ) : (
    <Navigate to={`/login/?returnURL=${location.pathname + location.search}`} />
  );
};

export default CommonProtectedRoute;
