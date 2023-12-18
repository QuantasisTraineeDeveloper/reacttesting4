import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { ButtonContainer } from "../../../common/button/index.style";
import { CustomInput } from "../../../common/input/index.style";
import { CustomModal } from "./index.style";
import { antValidator } from "../../../utils/helper";
import { queryScheme } from "../../../utils/validationSchema";
import { addLessonQuery } from "../../../redux/lessonSlice";
import { useSelector, useDispatch } from "react-redux";
import CustomBtn from "../../../common/button";
const { TextArea } = Input;

const UploadQuery = ({
  uploadQuery,
  setUploadQuery,
  form,
  courseId,
  lessonID,
}) => {
  const [rules, setRules] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    setRules(antValidator(queryScheme));
  }, []);

  const onReset = () => {
    form.resetFields();
  };
  const { lessonQueryLoading } = useSelector((state) => state.lesson);
  const submitLessonQuery = (values) => {
    const data = {
      rawCode: values.query,
      comment: values.queryComment,
    };
    dispatch(
      addLessonQuery({
        courseID: courseId,
        lessonID,
        data,
        setUploadQuery,
        onReset,
      })
    );
  };
  return (
    <div>
      <CustomModal title='' open={uploadQuery} onCancel={setUploadQuery}>
        <h1>Add new Query</h1>
        <Form
          style={{ textAlign: "start" }}
          form={form}
          onFinish={submitLessonQuery}>
          <CustomInput rules={[rules]} name='queryComment'>
            <Input placeholder='Query comment' />
          </CustomInput>
          <CustomInput rules={[rules]} name='query'>
            <TextArea rows={8} placeholder='Enter query code' />
          </CustomInput>
          <CustomBtn
            htmlType='submit'
            type='submit'
            title='Add'
            loading={lessonQueryLoading}
            disable={lessonQueryLoading}
          />
        </Form>
      </CustomModal>
    </div>
  );
};

export default UploadQuery;
