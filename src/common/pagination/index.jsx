import { Pagination } from "antd";
import React from "react";
import { Wrapper } from "./index.style";

const CustomPagination = (props) => {
  return (
    <Wrapper>
      <Pagination {...props} />
    </Wrapper>
  );
};

export default CustomPagination;
