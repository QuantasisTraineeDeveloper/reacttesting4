import { Input, Space, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
const TagsArea = ({ tags, setTags }) => {
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
    const newTags = tags?.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags?.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <Space size={[0, 8]} wrap>
      <Space size={[0, 8]} wrap>
        {tags?.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              className='newTag'
              key={tag}
              closable
              onClose={() => handleClose(tag)}>
              <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      </Space>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type='text'
          size='small'
          className='tagInput'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          className='addNewTag'
          onClick={() => {
            setInputVisible(true);
          }}>
          + New Tag
        </Tag>
      )}
    </Space>
  );
};
export default TagsArea;
