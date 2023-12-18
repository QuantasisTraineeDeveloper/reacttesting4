import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../common/footer";
import Header from "../../common/header";
import { Wrapper, Container } from "./index.style";
import { getUserProfile } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
    const token = authUser?.["token"];
    if (token) {
      dispatch(getUserProfile());
    }
  }, [navigate, dispatch]);

  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Wrapper>
  );
}
