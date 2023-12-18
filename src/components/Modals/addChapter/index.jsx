import { useState } from "react";
import CustomBtn from "../../../common/button";
import { CustomSelect } from "../../../common/select/index.style";
import { CustomModal } from "./index.style";
import { Form, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { antValidator } from "../../../utils/helper";
import { addNewChapterSchema } from "../../../utils/validationSchema";
import { getAllCourses } from "../../../redux/courseSlice";
import { addLessonChapter } from "../../../redux/lessonSlice";

const AddChapter = ({
  form,
  addChapter,
  setAddChapter,
  courseId,
  lessonID
}) => {
  const [chapterOptions, setChapterOptions] = useState([]);
  const [rules, setRules] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setRules(antValidator(addNewChapterSchema));
    dispatch(getAllCourses());
  }, []);

  const { allCourses } = useSelector((state) => state?.course);
  const courses = allCourses?.results;
  const courseOptions = [];
  courses?.map((course) => {
    courseOptions?.push({
      value: course?._id,
      label: course?.shortName,
      chapters: course?.chapter
    });
  });

  const onReset = () => {
    form.resetFields();
  };

  const onChangeCourse = (value, option) => {
    const options = [];
    setChapterOptions(options);
    option.chapters?.map((chapter) => {
      options.push({
        value: chapter?.name,
        label: chapter?.name
      });
    });
    setChapterOptions(options);
  };

  const { lessonChapterLoading } = useSelector((state) => state.lesson);

  const submitAddChapter = (values) => {
    const data = {
      courseId: values.courseId,
      chapterName: values.chapterName
    };
    dispatch(
      addLessonChapter({
        courseID: courseId,
        lessonID,
        data,
        setAddChapter,
        onReset
      })
    );
  };

  return (
    <div>
      <CustomModal title="" open={addChapter} onCancel={setAddChapter}>
        <h1>Add new Chapter</h1>
        <Form
          style={{ textAlign: "start" }}
          form={form}
          onFinish={submitAddChapter}
        >
          <CustomSelect name="courseId" >
            <Select
              showSearch
              placeholder="Course name"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={courseOptions}
              onChange={onChangeCourse}
            />
          </CustomSelect>
          <CustomSelect name="chapterName" rules={[rules]}>
            <Select
              showSearch
              placeholder="Chapter name"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={chapterOptions}
            />
          </CustomSelect>
          <CustomBtn
            htmlType="submit"
            type="submit"
            title="Add"
            loading={lessonChapterLoading}
            disable={lessonChapterLoading}
          />
        </Form>
      </CustomModal>
    </div>
  );
};
export default AddChapter;
