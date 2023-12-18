import { APIurls } from "./constants";
import apiService from ".";

export const ApiRequests = {
  // auth
  login: async (data) => await apiService.post(APIurls.login, data),

  // users
  getUserProfile: async () => await apiService.get(APIurls.profile),
  updateUserProfile: async (data) =>
    await apiService.put(APIurls.profile, data),
  userDashboard: async () => await apiService.get(APIurls.userDashboard),
  adminDashboard: async () => await apiService.get(APIurls.adminDashboard),

  // lecturer
  getLecturer: async () => await apiService.get(APIurls.lecturer),
  getLecturerDetails: async (lecturerId) =>
    await apiService.get(APIurls.lecturer + "/" + lecturerId),

  // liveclass
  joinLiveClass: async (data) =>
    await apiService.post(
      APIurls.liveClass +
        "/" +
        APIurls.students +
        "/" +
        APIurls.markedCompleted,
      data
    ),
  getAllLiveClasses: async () => await apiService.get(APIurls.liveClass),
  getSingleLiveClasses: async (classId) =>
    await apiService.get(APIurls.liveClass + "/" + classId),
  addLiveClasses: async (formDataObject) =>
    await apiService.post(APIurls.liveClass, formDataObject),
  updateStudentData: async (updatedData) =>
    await apiService.put(
      APIurls.liveClass + "/" + APIurls.updateStudentData,
      updatedData
    ),
  updateLessonCompletion: async (updatedData) =>
    await apiService.put(
      APIurls.liveClass + "/" + APIurls.updateLessonCompletion,
      updatedData
    ),
  removeLiveClass: async (Id) =>
    await apiService.delete(APIurls.liveClass + "/" + Id),

  // courses
  getAllCourses: async () => await apiService.get(APIurls.allCourses),
  getAdminCourses: async () => await apiService.get(APIurls.adminCourses),
  searchCourses: async (search) =>
    await apiService.get(APIurls.allCourses + "?search=" + search),
  getSingleCourse: async (courseID) =>
    await apiService.get(APIurls.singleCourse + "/" + courseID),
  getCoursesTags: async () => await apiService.get(APIurls.coursesTags),
  addCourse: async (data) => await apiService.post(APIurls.addCourse, data),
  updateCourse: async (data, courseID) =>
    await apiService.patch(APIurls.updateCourse + "/" + courseID, data),
  deleteCourse: async (courseID) =>
    await apiService.delete(APIurls.deleteCourse + "/" + courseID),
  courseReviews: async () => await apiService.get(APIurls.reviews),
  getCourseID: async (data) => await apiService.post(APIurls.courseID, data),
  randomCourse: async () => await apiService.get(APIurls.randomCourse),
  enrollCourse: async (courseID) =>
    await apiService.post(
      APIurls.profile + "/" + APIurls.singleCourse,
      courseID
    ),
  addCourseRating: async (courseID, data) =>
    await apiService.put(
      APIurls.profile + "/" + APIurls.singleCourse + "/" + courseID,
      data
    ),

  markedCompleted: async (courseID, markedData) =>
    await apiService.post(APIurls.markedCompleted + "/" + courseID, markedData),

  // chapter
  addChapter: async (data) =>
    await apiService.post(APIurls.courseChapter, data),
  updateChapter: async (data) =>
    await apiService.post(APIurls.updateChapter, data),
  removeChapter: async (data) =>
    await apiService.post(APIurls.removeChapter, data),

  // tools
  searchTool: async (data) => await apiService.post(APIurls.searchTool, data),

  // lessons
  addLesson: async (courseID, data) =>
    await apiService.post(
      APIurls.singleCourse + "/" + courseID + "/" + APIurls.singleLesson,
      data
    ),
  getCourseLessons: async (courseID) =>
    await apiService.get(
      APIurls.singleCourse + "/" + courseID + "/" + APIurls.courseLessons
    ),
  getAllLessons: async () => await apiService.get(APIurls.allLessons),
  deleteCourseLessons: async (courseID, lessonID) =>
    await apiService.delete(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.courseLessons +
        "/" +
        lessonID
    ),
  getLessonDetails: async (courseID, lessonID) =>
    await apiService.get(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.courseLessons +
        "/" +
        lessonID
    ),
  editLesson: async (courseID, lessonID, data) =>
    await apiService.post(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID,
      data
    ),

  // lesson chapter
  addLessonChapter: async (courseID, lessonID, data) =>
    await apiService.post(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.addCourseChapter,
      data
    ),

  deleteLessonChapter: async (courseID, lessonID, chapterID) =>
    await apiService.delete(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.deleteCourseChapter +
        "/" +
        chapterID
    ),

  // lesson video
  addLessonVideo: async (courseID, lessonID, data) =>
    await apiService.post(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonVideo,
      data
    ),

  deleteLessonVideo: async (courseID, lessonID, videoID) =>
    await apiService.delete(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonVideo +
        "/" +
        videoID
    ),

  // lesson query code
  addLessonQuery: async (courseID, lessonID, data) =>
    await apiService.post(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonQuery,
      data
    ),

  deleteLessonQuery: async (courseID, lessonID, queryID) =>
    await apiService.delete(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonQuery +
        "/" +
        queryID
    ),

  // lesson file
  addLessonFile: async (courseID, lessonID, data) =>
    await apiService.post(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonFile,
      data
    ),

  deleteLessonFile: async (courseID, lessonID, fileID, fileName, azureFolder) =>
    await apiService.delete(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.lessonFile +
        "/" +
        fileID +
        "/" +
        APIurls.lessonFileName +
        "/" +
        fileName +
        "/" +
        APIurls.azureFolder +
        "/" +
        azureFolder
    ),

  // related visited lessons
  getRelatedLessons: async (courseID, lessonID) =>
    await apiService.get(
      APIurls.singleCourse +
        "/" +
        courseID +
        "/" +
        APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.related
    ),

  // comments
  getCourseComments: async (courseID) =>
    await apiService.get(
      APIurls.singleCourse + "/" + courseID + "/" + APIurls.comments
    ),

  getCommentReplies: async (courseID) =>
    await apiService.get(
      APIurls.singleCourse + "/" + courseID + "/" + APIurls.replies
    ),
  addComment: async (lessonID, data) =>
    await apiService.post(
      APIurls.singleLesson + "/" + lessonID + "/" + APIurls.comments,
      data
    ),
  getAllComments: async (lessonID) =>
    await apiService.get(
      APIurls.singleLesson + "/" + lessonID + "/" + APIurls.comments
    ),
  deleteComment: async (lessonID, commentID) =>
    await apiService.delete(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID
    ),
  deleteCommentReply: async (lessonID, commentID, replyID) =>
    await apiService.delete(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.reply +
        "/" +
        replyID
    ),

  approveComment: async (lessonID, commentID) =>
    await apiService.get(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.approve
    ),

  approveReply: async (lessonID, commentID, replyID) =>
    await apiService.get(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.reply +
        "/" +
        replyID +
        "/" +
        APIurls.approve
    ),

  likeComments: async (lessonID, commentID) =>
    await apiService.get(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.like
    ),
  likeReply: async (lessonID, commentID, replyID) =>
    await apiService.get(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.reply +
        "/" +
        replyID +
        "/" +
        APIurls.like
    ),

  addReply: async (lessonID, commentID, data) =>
    await apiService.post(
      APIurls.singleLesson +
        "/" +
        lessonID +
        "/" +
        APIurls.comments +
        "/" +
        commentID +
        "/" +
        APIurls.reply,
      data
    ),

  // contact us
  submitContactUs: async (data) =>
    await apiService.post(APIurls.contactUs, data),

  // testimonial
  getAllTestimonials: async () => await apiService.get(APIurls.allTestimonials),
  getSingleTestimonial: async () => await apiService.get(APIurls.testimonial),
  addTestimonial: async (data) =>
    await apiService.post(APIurls.testimonial, data),
  updateTestimonial: async (data) =>
    await apiService.put(APIurls.testimonial, data),

  getAdminTestimonials: async () =>
    await apiService.get(APIurls.testimonial + "/" + APIurls.testimonials),
  deleteTestimonial: async (testimonialID) =>
    await apiService.delete(
      APIurls.testimonial +
        "/" +
        APIurls.removeTestimonial +
        "/" +
        testimonialID
    ),
  approveTestimonial: async (testimonialID) =>
    await apiService.get(
      APIurls.testimonial + "/" + APIurls.approve + "/" + testimonialID
    ),

  // subscription
  addSubscription: async (data) =>
    await apiService.post(APIurls.subscription, data),
  getSubscription: async () => await apiService.get(APIurls.subscription),

  // forum threads
  getAllCourseThreads: async (courseID) =>
    await apiService.get(APIurls.threads + "/" + courseID + "/all"),
  likeThread: async (threadID) =>
    await apiService.get(APIurls.threads + "/" + threadID + "/" + APIurls.like),
  disLikeThread: async (threadID) =>
    await apiService.get(
      APIurls.threads + "/" + threadID + "/" + APIurls.dislike
    ),
  likeThreadReply: async (threadID, replyId) =>
    await apiService.get(
      APIurls.threads +
        "/" +
        threadID +
        "/" +
        APIurls.reply +
        "/" +
        replyId +
        "/" +
        APIurls.like
    ),
  disLikeThreadReply: async (threadID, replyId) =>
    await apiService.get(
      APIurls.threads +
        "/" +
        threadID +
        "/" +
        APIurls.reply +
        "/" +
        replyId +
        "/" +
        APIurls.dislike
    ),
  getSingleThread: async (threadID) =>
    await apiService.get(APIurls.threads + "/" + threadID),
  searchThread: async (courseID, search) =>
    await apiService.get(
      APIurls.forum +
        "/" +
        courseID +
        "/" +
        APIurls.threads +
        "?search=" +
        search
    ),
  createThread: async (data) =>
    await apiService.post(APIurls.createThread, data),

  deleteThread: async (threadID) =>
    await apiService.delete(APIurls.threads + "/" + threadID),
  approveThread: async (threadID) =>
    await apiService.get(
      APIurls.threads + "/" + threadID + "/" + APIurls.approve
    ),

  // forum answers
  getForumAnswers: async (courseID) =>
    await apiService.get(
      APIurls.threads + "/" + courseID + "/all/" + APIurls.replies
    ),

  deleteForumAnswer: async (threadID, answerID) =>
    await apiService.delete(
      APIurls.threads + "/" + threadID + "/" + APIurls.reply + "/" + answerID
    ),
  approveForumAnswer: async (threadID, answerID) =>
    await apiService.get(
      APIurls.threads +
        "/" +
        threadID +
        "/" +
        APIurls.reply +
        "/" +
        answerID +
        "/" +
        APIurls.approve
    ),

  // query
  getQueryInfo: async (db) =>
    await apiService.get(APIurls.query + "/" + APIurls.QueryInfo + "?db=" + db),
  runQuery: async (data) =>
    await apiService.post(APIurls.query + "/" + APIurls.runQuery, data),
  generateUploadURL: async (data) =>
    await apiService.post(APIurls.generateUploadURL, data),
  generateDownloadURL: async (data) =>
    await apiService.post(APIurls.generateDownloadURL, data),
};
