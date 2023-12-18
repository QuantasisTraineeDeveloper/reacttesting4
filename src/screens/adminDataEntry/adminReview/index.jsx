import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Heading, Wrapper } from "../index.style";
import ForumAnswers from "./forumAnswers";
import ThreadsData from "./forumThreads";
import TopicComments from "./topicComments";
import TopicReplies from "./topicReplies";
import AdminTestimonials from "./testimonials";

const AdminReview = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  //  tabs
  const items = [
    {
      key: "1",
      label: `topic Comments`,
      children: <TopicComments />,
    },
    {
      key: "2",
      label: `topic replies`,
      children: <TopicReplies />,
    },
    {
      key: "3",
      label: `Forum threads`,
      children: <ThreadsData />,
    },
    {
      key: "4",
      label: `Forum answers`,
      children: <ForumAnswers />,
    },
    {
      key: "5",
      label: `Testimonials`,
      children: <AdminTestimonials />,
    },
  ];

  return (
    <Wrapper>
      <Container fluid>
        <Tabs
          defaultActiveKey='1'
          // tabBarExtraContent={{
          //   left: (
          //     <Heading>
          //       <h3>Admin review panel</h3>
          //       <p>{commentCount} Comments</p>
          //     </Heading>
          //   ),
          // }}
          items={items}
          onChange={onChange}
        />
      </Container>
    </Wrapper>
  );
};

export default AdminReview;
