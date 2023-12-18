import { Col, Rate, Row } from "antd";
import {
  CardAvatar,
  CardContainer,
  Descr,
  History,
  RateArea,
  SellerBtn,
  TitleName,
} from "./index.style";
import { nFormatter, intoHours } from "../../../utils/helper";

import React from "react";

const CourseSqlCard = (props) => {
  const {
    instructor,
    author,
    chapterCount,
    enrolledCount,
    overallRating,
    lessonCount,
    shortName,
    longName,
    viewCount,
    videoCount,
    videoLength,
    imageURL,
    ratingCount,
  } = props.data;
 

  return (
    <CardContainer>
      <CardAvatar>
        <img src={imageURL} alt='' />
      </CardAvatar>
      <div>
        <SellerBtn>
          <a href=''>Best seller</a>
        </SellerBtn>
        <TitleName>{shortName}</TitleName>
        <Descr>{longName}</Descr>
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            <span className='professor'>by professor {instructor}.</span>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 16 }}>
            <RateArea>
              <strong>{ratingCount}</strong>
              <Rate disabled={true} allowHalf defaultValue={ratingCount} />
              &nbsp; ({overallRating}) &nbsp;&bull;&nbsp;
              <span className='views'> {nFormatter(viewCount)} views</span>
            </RateArea>
          </Col>
          <Col span={24}>
            <History>
              <div>
                <a href=''>
                  <img src='/icons/clock-icon.svg' alt='' />
                  <span>{intoHours(videoLength)}</span>
                </a>
                <a href=''>
                  <img src='/icons/book-icon.svg' alt='' />
                  <span>{chapterCount} Chapters</span>
                </a>
              </div>
              <div>
                <a href=''>
                  <img src='/icons/topic-icon.svg' alt='' />
                  <span>{lessonCount} Topics</span>
                </a>
                <a href=''>
                  <img src='/icons/play-icon.svg' alt='' />
                  <span>{videoCount} videos</span>
                </a>
              </div>
            </History>
          </Col>
        </Row>
      </div>
    </CardContainer>
  );
};

export default CourseSqlCard;
