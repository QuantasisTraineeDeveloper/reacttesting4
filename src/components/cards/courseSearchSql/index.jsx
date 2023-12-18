import { Col, Rate, Row } from "antd";
import React from "react";
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

const CourseSearchSql = ({ data }) => {
  return (
    <CardContainer>
      <Row>
        <Col span={24}>
          <CardAvatar>
            <img src={data?.imageURL} alt='' />
          </CardAvatar>
        </Col>
        <Col span={24}>
          {/* <SellerBtn>
            <a href="">Best seller</a>
          </SellerBtn> */}
          <TitleName>{data?.shortName}</TitleName>
          <Descr>{data?.courseDetails}</Descr>

          <span className='professor'>by professor {data?.instructor}.</span>

          <RateArea>
            <strong>{data.ratingCount}</strong>
            <Rate disabled={true} allowHalf defaultValue={data.ratingCount} />
            <span className='countNum'>
              &nbsp; ({data?.overallRating}) &nbsp;
            </span>
            <div className='views'> {nFormatter(data?.viewCount)} views</div>
          </RateArea>

          <History>
            <div>
              <a href=''>
                <img src='/icons/clock-icon.svg' alt='' />
                <span>{intoHours(data?.videoLength)} Hours</span>
              </a>
              <a href=''>
                <img src='/icons/book-icon.svg' alt='' />
                <span>{data?.chapterCount} Chapters</span>
              </a>
            </div>
            <div>
              <a href=''>
                <img src='/icons/topic-icon.svg' alt='' />
                <span>{data?.lessonCount} Topics</span>
              </a>
              <a href=''>
                <img src='/icons/play-icon.svg' alt='' />
                <span>{data?.videoCount} videos</span>
              </a>
            </div>
          </History>
        </Col>
      </Row>
    </CardContainer>
  );
};

export default CourseSearchSql;
