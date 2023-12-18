import { Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import { CustomModal } from "./index.style";
import CustomBtn from "../../../common/button";
import { addLessonVideo } from "../../../redux/lessonSlice";
import { useSelector, useDispatch } from "react-redux";
import { CustomInput } from "../../../common/input/index.style";
import { antValidator } from "../../../utils/helper";
import { videoScheme } from "../../../utils/validationSchema";

const UploadVideo = ({
  uploadVideo,
  setUploadVideo,
  courseId,
  lessonID,
  form
}) => {
  const [rules, setRules] = useState({});
  const dispatch = useDispatch();
  const { lessonVideoLoading } = useSelector((state) => state.lesson);

  useEffect(() => {
    setRules(antValidator(videoScheme));
  }, []);

  const onReset = () => {
    form.resetFields();
  };

  const submitLessonVideo = (values) => {
    const data = {
      name: values.name,
      url: values.url,
      length: values.length
    };
    dispatch(
      addLessonVideo({
        courseID: courseId,
        lessonID,
        data,
        setUploadVideo,
        onReset
      })
    );
  };

  return (
    <>
      <CustomModal title="" open={uploadVideo} onCancel={setUploadVideo}>
        <h1>Add video link</h1>
        <Form
          style={{ textAlign: "start" }}
          form={form}
          onFinish={submitLessonVideo}
        >
          <CustomInput rules={[rules]} name="name">
            <Input placeholder="Video name" />
          </CustomInput>
          <CustomInput rules={[rules]} name="url">
            <Input placeholder="Video url" />
          </CustomInput>
          <CustomInput rules={[rules]} name="length">
            <Input placeholder="Video length" />
          </CustomInput>
          <CustomBtn
            htmlType="submit"
            type="submit"
            title="Add"
            loading={lessonVideoLoading}
            disable={lessonVideoLoading}
          />
        </Form>
      </CustomModal>
    </>
  );
};

export default UploadVideo;
