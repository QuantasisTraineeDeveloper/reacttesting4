import { Col, Input, Row, Space, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import {
  DeleteBtn,
  LearningPointArea,
} from "../manageCourses/addCourses/index.style";
const LearningPoints = ({ learningPoints, setLearningPoints }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag) => {
    const newTags = learningPoints?.filter((tag) => tag !== removedTag);
    setLearningPoints(newTags);
  };
  const handleInputConfirm = () => {
    if (inputValue && learningPoints?.indexOf(inputValue) === -1) {
      setLearningPoints([...learningPoints, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <>
      {learningPoints?.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Col xs={{ span: 24 }} lg={{ span: 12 }} key={index}>
            <Tag
              className='newLearningPoint'
              key={tag}
              closable
              closeIcon={
                <DeleteBtn>
                  <img src='/icons/delete.svg' alt='' />
                </DeleteBtn>
              }
              onClose={() => handleClose(tag)}>
              <span>
                {index + 1}. {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          </Col>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible ? (
        <Input
          placeholder='Enter new learning point'
          ref={inputRef}
          type='text'
          size='small'
          className='addNewLearningPoint'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          className='addNewLearningPoint'
          onClick={() => {
            setInputVisible(true);
          }}>
          Enter new learning point
        </Tag>
      )}
    </>
  );
};
export default LearningPoints;
