import React from "react";
import { Container } from "react-bootstrap";
import CustomPagination from "../../common/pagination";
import { TableContainer, Wrapper } from "./index.style";

const PaymentHistory = () => {
  const dataSource = [
    {
      key: "1",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "2",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "3",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "4",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "5",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "6",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "7",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
    {
      key: "8",
      id: "00100",
      date: "Jan 05 2023",
      amount: "$4.99",
      method: "Credit Card",
      subscrip: "Standard",
      timeline: "Jan 21 2022 - Feb 20 2022",
    },
  ];

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Payment Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Subscription",
      dataIndex: "subscrip",
      key: "subscrip",
    },
    {
      title: "Subscription Timeline",
      dataIndex: "timeline",
      key: "timeline",
    },
  ];
  return (
    <Wrapper>
      <Container>
        <div>
          <h1>Payment History</h1>
          <p>Last 12 month history</p>
        </div>
        <TableContainer dataSource={dataSource} columns={columns} />
        <CustomPagination count={40} />
      </Container>
    </Wrapper>
  );
};

export default PaymentHistory;
