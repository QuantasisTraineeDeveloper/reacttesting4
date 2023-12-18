import React, { useEffect, useState } from "react";
import { Heading } from "./index.style";
import LiveClassesCard from "./LiveClassesCard";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import { getAllLiveClasses } from "../../redux/liveClassSlice";
import { getUserProfile } from '../../redux/authSlice';

const LiveClasses = () => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const { allLiveClasses } = useSelector((state) => state?.liveClass);
  const { userProfile } = useSelector((state) => state?.auth);
  useEffect(() => {
    dispatch(getAllLiveClasses());
    dispatch(getUserProfile());
  }, [dispatch]);


  useEffect(() => {
    if (allLiveClasses?.length > 0) {
      setLoading(false);
    }
  }, [allLiveClasses]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const liveClassArray = Array.isArray(allLiveClasses.results)
    ? allLiveClasses.results
    : [];

  const startingSoonClasses = liveClassArray.filter(
    (course) => course.classStatus === "Class starting soon"
  );
  const inProgressClasses = liveClassArray.filter(
    (course) => course.classStatus === "In Progress"
  );

  return (
    <Heading>
      <div className="row">
        <h2 className="heading">Classes</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col title">
            <h2 className="f-l-class">Future Classes</h2>
            <p className="len-class">
              {startingSoonClasses.length} awaiting classes
            </p>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {startingSoonClasses.length > 0 ? (
            <LiveClassesCard userProfile={userProfile} liveClass={startingSoonClasses} />
          ) : (
            <div className="mt-3 mb-3 text-center">
              {showMessage ? (
                <p>No classes starting soon</p>
              ) : null}
            </div>
          )}
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col title">
            <h2 className="f-l-class">Live Classes</h2>
            <p className="len-class">{inProgressClasses.length} live classes</p>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {inProgressClasses.length > 0 ? (
            <LiveClassesCard userProfile={userProfile} liveClass={inProgressClasses} />
          ) : (
            <div className="mt-3 mb-3 text-center">
              {showMessage ? (
                <p>No classes starting soon</p>
              ) : null}
            </div>
          )}
        </div>
      )}
    </Heading>
  );
};

export default LiveClasses;
