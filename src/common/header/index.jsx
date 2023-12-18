import { Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HeaderContent } from "./index.styled";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userProfile } = useSelector((state) => state?.auth);
  const items = [
    {
      label: (
        <Link
          to={`${userProfile?.admin ? "/admin/dashboard" : "/user/dashboard"}`}>
          Dashboard
        </Link>
      ),
      key: "0",
    },
    {
      label: <Link to='/profile'>Setting</Link>,
      key: "1",
    },
    {
      label: <p onClick={() => dispatch(logout({ navigate }))}>logout</p>,
      key: "2",
    },
  ];
  return (
    <HeaderContent>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img src="/images/logo.svg" alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/courses/list" className="nav-link">
                Courses
              </NavLink>
              <NavLink to="/plans" className="nav-link">
                Subscriptions
              </NavLink>
              <NavLink to="/liveClasses" className="nav-link">
                Live Zoom Class
              </NavLink>
              {Object.keys(userProfile ?? {})?.length > 0 ? (
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <NavLink
                      to="#"
                      onClick={(e) => e.preventDefault()}
                      className="profile"
                    >
                      <img src="/images/user-icon.png" alt="" />
                      <strong>{userProfile?.name?.split(" ")?.[0]}</strong>
                      <span>
                        <img src="/icons/polygon-icon.svg" alt="" />
                      </span>
                    </NavLink>
                  </a>
                </Dropdown>
              ) : (
                <>
                  <NavLink to="/login" className="nav-link">
                    Sign in
                  </NavLink>
                  <NavLink to="/register" className="signupBtn">
                    Sign up
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContent>
  );
};

export default Header;
