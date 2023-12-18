import React from "react";
import { Wrapper, Logo } from "./index.style";
import { NavLink } from "react-router-dom";

export default function Sidebar({ data }) {
  return (
    <Wrapper>
      <Logo>
        <img src='/images/FMHeroLogo-Color-Landscape.png' alt='' />
      </Logo>
      {data.map((item, i) => (
        <NavLink to={i}>
          <span>{item.icon}</span>
          <span>{item.title}</span>
        </NavLink>
      ))}
    </Wrapper>
  );
}
