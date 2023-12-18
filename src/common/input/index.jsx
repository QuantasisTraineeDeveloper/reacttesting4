import { Input } from "antd";
import React from "react";
import { CustomInput } from "./index.style";

const CommonInput = (props) => {
  return (
    <CustomInput>
      <Input placeholder={props.labelName} type={props.inputtype} />
    </CustomInput>
  );
};

export default CommonInput;
