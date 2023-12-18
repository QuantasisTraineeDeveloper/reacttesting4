import React from "react";
import { TableContainer } from "./index.style";
import { paginate } from "../../utils/helper";

const CustomTable = ({ data, pageSize, currentPage }) => {
  let dataSource = [];
  if (data?.length > 0) {
    paginate(data, currentPage, pageSize)?.map((item) => {
      const objValue = Object.values(item).find(
        (i) => typeof i === "object" && i !== null
      );
      const objKey = Object.keys(item).find((i) => item[i] === objValue);

      dataSource.push({
        ...item,
        [objKey]: JSON.stringify(objValue),
      });
      return false;
    });
  }

  let columns = [];
  if (data?.length > 0) {
    Object.keys(data?.[0])?.map((item, index) => {
      columns.push({
        title: item?.toUpperCase(),
        dataIndex: item,
        key: item,
      });

      return false;
    });
  }
  return (
    <div>
      <TableContainer
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: 1200,
        }}
      />
    </div>
  );
};

export default CustomTable;
