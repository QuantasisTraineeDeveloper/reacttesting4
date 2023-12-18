import { Col, Row } from "antd";
import React from "react";
import {
  CardAvatar,
  CardContainer,
  Descr,
  RateArea,
  TitleName,
} from "./index.style";
import { nFormatter } from "../../../utils/helper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ToolSearchCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <SearchCardContainer
      onClick={() => {
        // for course
        if (data?.type === "course") {
          navigate(`/course_detail?name=${data?.shortName}`);
          return;
        }

        // for chapter
        if (data?.type === "chapter") {
          navigate(`/course_detail?name=${data?.course?.shortName}`);
          return;
        }

        // for lesson
        if (data?.type === "lesson") {
          navigate(
            `/${data?.course?.shortName}/${data?.chapterName}/${data?.name}`
          );
          return;
        }

        // for code
        if (data?.type === "code") {
          navigate(
            `/${data?.course?.shortName}/${data?.chapterName}/${data?.name}`
          );
        }
      }}>
      <div
        className='lableMark'
        style={{
          background: `${data.type === "code" ? "#415E72" : "#ED7201"}`,
        }}>
        <img
          src={`/icons/${
            data.type === "code" ? "code-arrow.svg" : "f-book.svg"
          }`}
          alt=''
        />
      </div>
      <CardAvatar>
        <img src={data?.imageURL ?? data?.course?.imageURL} alt='' />
      </CardAvatar>
      <div className='w-100'>
        {data?.type === "chapter" ? (
          <div className='chapter'>
            Chapter :{" "}
            <strong>
              {data?.type === "chapter" ? data?.name : data?.chapterName}
            </strong>
          </div>
        ) : data?.type === "lesson" ? (
          <div className='chapter'>
            Lesson : <strong>{data?.name}</strong>
          </div>
        ) : null}

        <TitleName>{data?.longName ?? data?.course?.longName}</TitleName>
        <span className='userName'>{`Learn ${
          data?.shortName ?? data?.course?.shortName
        } by ${data?.instructor ?? data?.course?.instructor}`}</span>
        <Row gutter={16}>
          <Col xs={{ span: 24 }}>
            {data?.type === "code" ? (
              <code>{data?.code?.rawCode}</code>
            ) : (
              <Descr>
                {data?.type === "course"
                  ? data?.courseDetails?.length > 160
                    ? data?.courseDetails?.slice(0, 160) + "..."
                    : data?.courseDetails
                  : data?.course?.courseDetails?.length > 160
                  ? data?.course?.courseDetails?.slice(0, 160) + "..."
                  : data?.course?.courseDetails}
              </Descr>
            )}
          </Col>
          <Col xs={{ span: 24 }}>
            <RateArea>
              <span className='views'>
                {nFormatter(data?.viewCount ?? data?.course?.viewCount)} views
              </span>
              {data?.type === "code" && (
                <span className='runBtn'>Run Query</span>
              )}
            </RateArea>
          </Col>
        </Row>
      </div>
    </SearchCardContainer>
  );
};

export default ToolSearchCard;

export const SearchCardContainer = styled.div`
  height: 260px;
  display: flex;
  padding: 1.5em;
  position: relative;
  margin: auto;
  margin-bottom: 1.5em;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.07);
  .lableMark {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 59px;
    position: absolute;
    top: 0;
    right: 2%;
    overflow: hidden;
    background: #415e72;
    img {
      width: 20px;
      margin-bottom: 0.7em;
      // filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(102deg)
      //   brightness(102%) contrast(101%);
    }
    &::after {
      content: "";
      width: 50px;
      height: 50px;
      position: absolute;
      top: 41px;
      right: 0;
      left: 0;
      display: block;
      background: #ffffff;
      transform: rotate3d(8, 3, -7, 65deg);
    }
  }
  .userName {
    display: block;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    & {
      height: 148px;
      padding: 0.5em;
      .lableMark {
        width: 20px;
        height: 25px;
        img {
          width: 12px;
          margin-bottom: 0.4em;
        }
        &::after {
          width: 20px;
          height: 20px;
          top: 15px;
        }
      }
      .userName {
        display: block;
        margin-bottom: 1em;
        font-size: 0.8em;
      }
      .chapter {
        font-size: 0.8em;
      }
    }
  }
`;
