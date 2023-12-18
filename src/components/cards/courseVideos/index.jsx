import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { coursesvideosdata } from "../../../assets/data/allData";
import { CardContainer, VideoItem, VideoModal } from "./index.style";
import { convertIntoHHMMSS, findVideoIndex } from "../../../utils/helper";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { BsCheck } from "react-icons/bs";
import { markedCompleted } from "../../../redux/courseSlice";
import { IoMdLock } from "react-icons/io";

const CourseVideos = ({ courseID, video, videos, courseName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedLesson, setSelectedlesson] = useState(null);
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const { lessonDetails, lessonLoading, courseLessons } = store?.lesson;
  const lessonsHasVideos = courseLessons.filter(
    (item) => item?.video?.length > 0
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <VideoModal title='' centered open={isModalOpen} onCancel={handleCancel}>
        <span className='chapterName'>{selectedLesson?.chapterName}</span>
        <h2 className='courseName'>{courseName}</h2>

        <div className='playArea'>
          <ReactPlayer
            width='100%'
            style={{ maxHeight: "264px" }}
            url={selectedVideo?.url}
            controls={true}
          />
          {/* <img src='/images/video-1.png' alt='' /> */}
        </div>
        <div className='modalVideos'>
          <h4>
            {selectedLesson?.chapterName} ({videos?.length} videos )
          </h4>

          {videos?.map((video) => {
            return (
              <VideoItem
                className={`cursor-pointer ${
                  video?._id === selectedVideo?._id && "activeVideo"
                }`}
                key={video?._id}
                onClick={() => {
                  if (video?.publicView) {
                    setSelectedVideo(video);
                    const index = findVideoIndex(video?._id, lessonsHasVideos);
                    if (!video?.viewed) {
                      dispatch(
                        markedCompleted({
                          courseID,
                          markedData: {
                            id: video?._id,
                            type: "video",
                            chapterName: lessonsHasVideos[index]?.chapterName,
                            lessonId: lessonsHasVideos[index]?._id,
                          },
                        })
                      );
                    }
                  }
                }}>
                <div className='videoDetail'>
                  <img src={`/images/img-9.png`} alt='' />
                  <div className='videoTitle'>
                    <p>
                      {video?.name?.split(".")?.[0].length > 20
                        ? video?.name?.split(".")?.[0].slice(0, 20) + "..."
                        : video?.name?.split(".")?.[0]}
                    </p>
                    <span>{convertIntoHHMMSS(video?.length)}</span>
                  </div>
                </div>

                {video?._id === selectedVideo?._id ? (
                  <div className='playIcon'>
                    <img src='/icons/playIcon.svg' alt='' />
                  </div>
                ) : !video?.publicView ? (
                  <IoMdLock
                    style={{ fontSize: "1.5rem", margin: "0 0.5rem 0 0" }}
                  />
                ) : video?.viewed ? (
                  <div className='viewed'>
                    <BsCheck className='checkIcon' /> <p>Viewed</p>
                  </div>
                ) : null}
              </VideoItem>
            );
          })}
        </div>
        {/* <div className='footerBtn'>
          <span>
            <FiChevronDown />
          </span>
        </div> */}
      </VideoModal>
      <CardContainer
        onClick={() => {
          if (video?.publicView) {
            const index = findVideoIndex(video?._id, lessonsHasVideos);
            if (!video?.viewed) {
              dispatch(
                markedCompleted({
                  courseID,
                  markedData: {
                    id: video?._id,
                    type: "video",
                    chapterName: lessonsHasVideos[index]?.chapterName,
                    lessonId: lessonsHasVideos[index]?._id,
                  },
                })
              );
            }
            showModal();
            setSelectedlesson(lessonsHasVideos[index]);
            setSelectedVideo(video);
          }
        }}
        className={video?.publicView ? "cursor-pointer" : "cursor-notAllowd"}>
        <img src={`/images/img-9.png`} alt='' />
        <div>
          <p>
            {video?.name?.split(".")?.[0].length > 20
              ? video?.name?.split(".")?.[0].slice(0, 20) + "..."
              : video?.name?.split(".")?.[0]}
          </p>
          <div className='videoDetail'>
            <span>{convertIntoHHMMSS(video?.length)}</span>

            {!video?.publicView ? (
              <IoMdLock />
            ) : video?.viewed ? (
              <div className='viewed'>
                <BsCheck className='checkIcon' /> <p>Viewed</p>
              </div>
            ) : null}
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default CourseVideos;
