import { Outlet, Navigate, useLocation } from "react-router-dom";

const AdminProtectedRoute = () => {
  const location = useLocation();
  const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
  return authUser?.token && authUser?.admin === true ? (
    <Outlet />
  ) : (
    <Navigate to={`/login/?returnURL=${location.pathname + location.search}`} />
  );
};

export default AdminProtectedRoute;
