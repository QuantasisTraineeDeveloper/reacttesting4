import { Select } from "antd";
import React, { useState, useMemo } from "react";

import countryList from "react-select-country-list";

const CountrySelect = () => {
  const options = useMemo(() => countryList().getData(), []);

  const onChange = (value) => {
    // console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    // console.log("search:", value);
  };
  return (
    <>
      <Select
        showSearch
        placeholder='--Select Country--'
        optionFilterProp='children'
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={options}
      />
    </>
  );
};

export default CountrySelect;
