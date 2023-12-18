export const basePath = "http://localhost:8080/api/tansyacademy/";
// export const basePath = "https://tansybackend.us.to/api/tansyacademy/";

export const APIurls = {
  // auth
  login: "auth/login",

  // user
  profile: "auth/profile",
  userDashboard: "auth/profile/courses",
  adminDashboard: "courses/count",

  // lecturerList
  lecturer: "auth/lecturer",

  // liveclasses
  liveClass: "liveclasses",
  students: "students",
  updateStudentData:"updateStudentData",
  updateLessonCompletion:"updateLessonCompletion",
  
  // tools
  searchTool: "search-tool",

  // courses
  allCourses: "courses",
  singleCourse: "course",
  coursesTags: "courses/tags",
  addCourse: "course",
  updateCourse: "course",
  adminCourses: "courses",
  deleteCourse: "course",
  reviews: "reviews",
  markedCompleted: "enrollment",

  // chapter
  courseChapter: "course/chapter",
  updateChapter: "course/chapter",
  removeChapter: "course/chapter",

  // lessons
  courseLessons: "lesson",
  singleLesson: "lesson",
  lessonVideo: "video",
  addCourseChapter: "courseChapter",
  deleteCourseChapter: "courseChapter",
  lessonQuery: "code",
  lessonFile: "file",
  lessonFileName: "filename",
  azureFolder: "azureFolder",
  allLessons: "lessons",
  courseID: "courses/id",
  randomCourse: "courses/random",
  related: "related",

  // comments
  comments: "comments",
  reply: "reply",
  replies: "replies",

  // approval
  approve: "approve",

  // like
  like: "like",
  dislike: "dislike",

  //contact us
  contactUs: "contact-us",

  // testimonials
  allTestimonials: "testimonial/all",
  testimonial: "testimonial",
  testimonials: "testimonials",
  removeTestimonial: "remove",

  // subscription
  subscription: "subscription",

  // forum questions
  forum: "forum",
  threads: "threads",
  thread: "thread",
  createThread: "forum/thread/create",

  // forum answers
  answers: "answers",

  // query
  query: "query",
  QueryInfo: "info",
  runQuery: "run",

  // upload urls
  generateUploadURL: "generate-Upload-URL",
  generateDownloadURL: "generate-Download-URL",
};
