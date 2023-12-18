import React from "react";
import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { CustomTable } from "./index.style";

const columns = [
  {
    title: "",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Free",
    dataIndex: "free",
    key: "free",
  },
  {
    title: "Standard",
    dataIndex: "standard",
    key: "standard",
  },
  {
    title: "Silver",
    dataIndex: "silver",
    key: "silver",
  },
  {
    title: "Premium",
    dataIndex: "premium",
    key: "premium",
  },
];

const PlanDataTable = ({ comparision }) => {
  const rows = [];
  comparision.map((compare) => {
    rows.push({
      key: compare.title,
      name: (
        <p>
          {compare.title} <img src='/icons/info-icon.svg' alt='' />
        </p>
      ),
      free: compare.free ? (
        <img src='/icons/check-icon.svg' alt='' />
      ) : (
        <img src='/icons/close-icon.svg' alt='' />
      ),
      standard: compare.standard ? (
        <img src='/icons/check-icon.svg' alt='' />
      ) : (
        <img src='/icons/close-icon.svg' alt='' />
      ),
      silver: compare.silver ? (
        <img src='/icons/check-icon.svg' alt='' />
      ) : (
        <img src='/icons/close-icon.svg' alt='' />
      ),
      premium: compare.premium ? (
        <img src='/icons/check-icon.svg' alt='' />
      ) : (
        <img src='/icons/close-icon.svg' alt='' />
      ),
    });
  });
  console.log(rows);

  return (
    <div>
      <CustomTable dataSource={rows} columns={columns} />
    </div>
  );
};

export default PlanDataTable;
