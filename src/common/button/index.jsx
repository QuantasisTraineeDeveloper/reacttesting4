import React from "react";
import { ButtonContainer } from "./index.style";
import { LoadingOutlined, Loading3QuartersOutlined } from "@ant-design/icons";

const CustomBtn = (props) => {
  return (
    <ButtonContainer
      onClick={props.onClick}
      htmlType={props.type}
      disabled={props.disable}>
      {props.loading ? <LoadingOutlined className='loader' /> : props.title}
    </ButtonContainer>
  );
};

export default CustomBtn;
