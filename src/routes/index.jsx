import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/userLayout";
import About from "../screens/about";
import Login from "../screens/auth/login";
import Registeration from "../screens/auth/register";
import Contact from "../screens/contact";
import CoursesDetails from "../screens/courses/coursesDetails";
import CoursesList from "../screens/courses/coursesList";
import CoursesTopic from "../screens/courses/coursesTopic";
import DataEntry from "../screens/adminDataEntry";
import ForumThreadList from "../screens/Forum/forumlList";
import CreateThread from "../screens/Forum/forumlList/createThread";
import ThreadDetails from "../screens/Forum/forumlList/threadQuestion";
import ManageTopic from "../screens/Forum/manageTopic";
import AdminLiveClass from "../screens/adminDataEntry/adminClass/adminLiveClass";
import AdminClassDetails from "../screens/adminDataEntry/adminClass/adminClassDetails";
import TopicDetails from "../screens/Forum/manageTopic/topicDetails";
import Home from "../screens/home";
import PaymentHistory from "../screens/paymentHistory";
import Profile from "../screens/profile";
import ProfileChange from "../screens/profile/profileChange";
import QueryTool from "../screens/queryTool";
import SearchTool from "../screens/searchTool";
import Plans from "../screens/selectPlan";
import Services from "../screens/services";
import Subscription from "../screens/subscription";
import ConfirmOtp from "../screens/subscription/otp";
import PaymentDetails from "../screens/subscription/payment";
import SuccessfulMsg from "../screens/subscription/successful";
import Testimonials from "../screens/testimonials";
import SearchToolResult from "../screens/toolResult";
import AdminReview from "../screens/adminDataEntry/adminReview";
import AdminDashBoard from "../screens/adminDashboard";
import UserDashBoard from "../screens/userDashboard";
import AdminProtectedRoute from "../utils/AdminProtectedRoute";
import UserProtectedRoute from "../utils/UserProtectedRoute";
import CommonProtectedRoute from "../utils/CommonProtectedRoute";
import ManageCourses from "../screens/manageCourses";
import AddCourse from "../screens/manageCourses/addCourses";
import EditCourse from "../screens/manageCourses/addCourses/EditCourse";
import EditTopic from "../screens/Forum/manageTopic/topicDetails/EditTopic";
import ScrollToTop from "../common/ScrollToTop";
import PrivacyPolicy from "../screens/privacyPolicy";
import TermsAndConditions from "../screens/termsAndConditions";
import Internship from "../screens/internship";
import LiveClasses from "../screens/liveClasses";
import JobsListing from "../screens/jobsListing";

const AllRouts = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/internship" element={<Internship />} />

          <Route path="/jobslisting" element={<JobsListing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />

          {/* CoursesList */}
          <Route path="/courses/list" element={<CoursesList />} />
          <Route path="/course_detail" element={<CoursesDetails />} />

          <Route
            path='/:courseName/:chapterName/:lessonName'
            element={<CoursesTopic />}
          />

          <Route path="/querytool" element={<QueryTool />} />
          <Route path="/search" element={<SearchTool />} />
          <Route path="/result" element={<SearchToolResult />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/forum" element={<ForumThreadList />} />
          <Route path="/forum/:forumID" element={<ThreadDetails />} />

          {/* Testimonials */}
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Subscription */}
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscription/payment" element={<PaymentDetails />} />
          <Route path="/subscription/confirmotp" element={<ConfirmOtp />} />
          <Route path="/subscription/successful" element={<SuccessfulMsg />} />

          {/* User Protected Routes */}
          <Route element={<UserProtectedRoute />}>
            <Route path="/user/dashboard" element={<UserDashBoard />} />
          </Route>

          {/* Common Protected Routes */}
          <Route element={<CommonProtectedRoute />}>
            <Route path="/liveClasses" element={<LiveClasses />} />
            <Route path="/forum/add-question" element={<CreateThread />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profilechange" element={<ProfileChange />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashBoard />} />
            <Route path="/admin/review" element={<AdminReview />} />
            <Route path="/admin/topic" element={<ManageTopic />} />
            <Route path="/admin/liveclass" element={<AdminLiveClass />} />
            <Route
              path="/admin/classdetails/:classId"
              element={<AdminClassDetails />}
            />
            <Route
              path="/admin/topic/add-topic/:courseId"
              element={<TopicDetails />}
            />
            <Route
              path='/admin/topic/edit/:courseId/:lessonID'
              element={<EditTopic />}
            />
            <Route path="/admin/chapters" element={<DataEntry />} />
            <Route path="/admin/courses" element={<ManageCourses />} />
            <Route path="/admin/courses/add-course" element={<AddCourse />} />
            <Route
              path="/admin/courses/edit/:courseId"
              element={<EditCourse />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRouts;
