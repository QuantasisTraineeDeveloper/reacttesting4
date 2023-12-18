import * as yup from "yup";

const validFileExtensions = {
  image: ["jpg", "jpeg", "png"],
  video: ["mp4", "mov", "avi"]
};

function isValidFileType(file, fileType) {
  const fileName = file;
  if (typeof fileName !== "string") {
    return false;
  }

  const fileExtension = fileName.match(/\.([^.]+)$/)?.[1];
  return fileExtension && validFileExtensions[fileType].includes(fileExtension);
}

export const contactScheme = yup.object().shape({
  purpose: yup.string().required("purpose is required"),
  name: yup
    .string()
    .required("full name is required")
    .matches(/^[a-zA-Z ]*$/, "alphabets and space only"),
  email: yup.string().required("email is required").email("invalid email"),
  country: yup.string().required("purpose is required"),
  message: yup.string().required("message is required")
});

export const profileScheme = yup.object().shape({
  username: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]*$/, "alphabets and space only"),
  // email: yup.string().required("email is required").email("invalid email"),
  country: yup.string().required("country is required"),
  city: yup.string().required("city is required")
});

export const testimonialSchema = yup.object().shape({
  testimonial: yup.string().required("testimonial is required")
});

export const searchToolSchema = yup.object().shape({
  search: yup.string().required("keyword is required")
});

export const courseScheme = yup.object().shape({
  shortName: yup
    .string()
    .required("course short name is required")
    .matches(/^[a-zA-Z ]*$/, "alphabets and space only"),
  longName: yup
    .string()
    .required("course long name is required")
    .matches(/^[a-zA-Z ]*$/, "alphabets and space only"),
  description: yup.string().required("description is required"),
  courseImage: yup
    .mixed()
    .required("course image is required")
    .test(
      "is-valid-type",
      `only ${validFileExtensions["image"].join(", ")} is allowed`,
      (value) => isValidFileType(value, "image")
    ),
  courseIntroVideo: yup
    .mixed()
    .required("course intro video is required")
    .test(
      "is-valid-type",
      `only ${validFileExtensions["video"].join(", ")} is allowed`,
      (value) => isValidFileType(value, "video")
    ),
  noOfLesson: yup
    .number()
    .typeError("only numbers allowed")
    .required("number of lesson is required"),
  noOfChapter: yup
    .number()
    .typeError("only numbers allowed")
    .required("number of chapter is required"),
  noOfVideo: yup
    .number()
    .typeError("only numbers allowed")
    .required("number of videos is required"),
  videoLength: yup.string().required("video length is required"),
  learn: yup.string().required("one item is required"),
  requirements: yup.string().required("course short name is required"),
  language: yup.string().required("language is required"),
  instructor: yup.string().required("instructor lesson is required"),
  category: yup.string().required("category is required")
  // tags: yup.string().required("minimum one item required"),
});

export const chaptertScheme = yup.object().shape({
  chapterName: yup.string().required("chapter name is required"),
  sequenceNumber: yup
    .number()
    .required("sequence number is required")
    .typeError("numbers only"),
  description: yup.string().required("description is required")
  // allowVideos: yup.string().required("message is required"),
  // allowFiles: yup.string().required("message is required"),
});

export const topicScheme = yup.object().shape({
  chapterName: yup.string().required("chapter name is required"),
  topicName: yup.string().required("topic name is required"),
  sequenceNumber: yup
    .number()
    .required("sequence number is required")
    .typeError("numbers only"),
  description: yup.string().required("description is required")
  // allowVideos: yup.string().required("message is required"),
  // allowFiles: yup.string().required("message is required"),
  // content: yup.string().required("message is required"),
});

export const queryScheme = yup.object().shape({
  queryComment: yup.string().required("query comment is required"),
  query: yup.string().required("query is required")
});

export const threadScheme = yup.object().shape({
  title: yup.string().required("title is required"),
  description: yup.string().required("description is required"),
  code: yup.string().required("code is required")
  // tags: yup.string().required("tags is required"),
});

export const liveClassSchema = yup.object().shape({
  classId: yup.string().required("Class ID is required"),
  className: yup.string().required("Class Name is required"),
  classStartDate: yup.string().required("Class Start Date is required"),
  estTime: yup.string().required("EST Time is required"),
  istTime: yup.string().required("ISS Time is required"),
  lecturerID: yup.string().required("lecturer ID is required"),
});

export const updateStudentCheck = yup.object().shape({
  name: yup.string().required("Student name is required"),
  membershipType: yup.string().required("Membership type is required"),
  courseReviewer: yup.string().required("Course Reviewer is required"),
  internshipReviewer: yup.string().required("Internship Reviewer is required"),
});

export const LessonCompletionCheck = yup.object().shape({
  completedDate: yup.string().required("Please check this field"),
  completedFlag: yup.string().required("Please check this field"),
});

export const addNewChapterSchema = yup.object().shape({
  courseId: yup.string().required("course name is required"),
  chapterName: yup.string().required("chapter name is required")
});

export const videoScheme = yup.object().shape({
  name: yup.string().required("video name is required"),
  url: yup.string().required("video url is required"),
  length: yup.string().required("video length is required")
});