import { Select } from "antd";
import React from "react";
import { CustomSelect } from "./index.style";

const CommonSelect = (props) => {
  return (
    <CustomSelect>
      <Select
        defaultOpen={props.defaultOpen}
        mode={props.mode}
        allowClear={props.allowClear}
        showSearch
        placeholder={props.labelName}
        onChange={props.onChange}
        optionFilterProp='children'
        value={props.value}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={props.options}
      />
    </CustomSelect>
  );
};

export default CommonSelect;
