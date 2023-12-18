import course from "./courseSlice";
import contact from "./contactSlice";
import testimonial from "./testimonialSlice";
import auth from "./authSlice";
import tool from "./toolSlice";
import user from "./userSlice";
import admin from "./adminSlice";
import chapter from "./chapterSlice";
import lesson from "./lessonSlice";
import forum from "./forumSlice";
import comment from "./commentSlice";
import liveClass from "./liveClassSlice";
import queryTool from "./queryToolSlice";
import jobsListing from "./jobsListingSlice";

const rootReducer = {
  auth,
  course,
  contact,
  testimonial,
  tool,
  user,
  admin,
  chapter,
  lesson,
  liveClass,
  forum,
  comment,
  queryTool,
  jobsListing,
};

export default rootReducer;
