import React from "react";
import { LoadingOutlined, Loading3QuartersOutlined } from "@ant-design/icons";
import { LoadingSpinnerContainer } from "./Loading.style";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      {/* <Loading3QuartersOutlined spin className='loadingSpinner' /> */}
      <LoadingOutlined className='loadingSpinner' />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
