import { Col, Collapse, Form, Input, Row } from "antd";

import React, { useEffect, useState } from "react";
import { CommentContainer } from "./index.style";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  addReply,
  getAllComments,
  likeComments,
  likeReply,
  resetComments,
} from "../../redux/commentSlice";
import LoadingSpinner from "../../common/Loading/LoadingSpinner";
import moment from "moment";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
import { LoadingOutlined, LikeOutlined } from "@ant-design/icons";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { nFormatter, paginate } from "../../utils/helper";
import CustomPagination from "../../common/pagination";

const SocialComments = ({ currentLesson, userProfile }) => {
  const [replyTo, setReplyTo] = useState(null);
  // const [emojiPicker, setEmojiPicker] = useState(false);
  // const [emoji, setEmoji] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [comment] = Form.useForm();
  const [reply] = Form.useForm();
  const { Panel } = Collapse;

  const dispatch = useDispatch();
  const { allComments, loading, replyLoading } = useSelector(
    (state) => state?.comment
  );

  const isLogedin = Object.keys(userProfile ?? {})?.length > 0;

  // comments api dispatch
  useEffect(() => {
    if (Object.keys(currentLesson ?? {})?.length > 0) {
      dispatch(getAllComments(currentLesson?._id));
    }

    return () => dispatch(resetComments());
  }, [currentLesson, dispatch]);

  // on reset comment form
  const onResetComment = () => {
    comment.resetFields();
  };

  // on reset reply form
  const onResetReply = () => {
    reply.resetFields();
  };

  return (
    <CommentContainer>
      <div className='commentSection'>
        <h2>
          Comments{" "}
          <span>
            ({allComments?.length}
            comments)
          </span>
        </h2>
        <div className='commentArea'>
          {isLogedin ? (
            <Form
              form={comment}
              onFinish={(v) =>
                dispatch(
                  addComment({
                    lessonID: currentLesson?._id,
                    data: v,
                    onResetComment,
                  })
                )
              }>
              <Row>
                <Col span={2}>
                  <div className='userAvatar'>
                    <img src={userProfile?.imageURL} alt='' />
                  </div>
                </Col>
                <Col span={20}>
                  <Form.Item name='comment'>
                    <Input placeholder='Add a comment...' />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          ) : null}
          <div>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                {allComments?.length > 0 ? (
                  <>
                    {paginate(allComments, currentPage, pageSize)?.map(
                      (comment) => (
                        <div key={comment?._id}>
                          <div className='commentsUser'>
                            <div className='userAvatar'>
                              <img src={comment?.user?.imageURL} alt='' />
                            </div>
                            <div>
                              <div className='userName'>
                                <h6>{comment?.user?.name}</h6>
                                {/* <strong>240</strong>{" "} */}
                                <span>
                                  {moment(comment?.createdAt).fromNow()}
                                </span>
                              </div>
                              <p className='aboutUser'>{comment?.comment}</p>
                              <div className='likeArea'>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "0.5em",
                                  }}>
                                  <span
                                    onClick={() =>
                                      dispatch(
                                        likeComments({
                                          lessonID: currentLesson._id,
                                          commentID: comment?._id,
                                        })
                                      )
                                    }>
                                    {comment?.liked ? (
                                      <BiSolidLike
                                        style={{
                                          color: "rgb(211, 147, 49)",
                                        }}
                                      />
                                    ) : (
                                      <BiLike />
                                    )}

                                    {/* <img src='/icons/like-icon.svg' alt='' /> */}
                                  </span>
                                  <strong>{nFormatter(comment?.likes)}</strong>
                                </div>
                                {/* <span className='dislike'>
                                  <img src='/icons/dislike-icon.svg' alt='' />
                                </span> */}
                                {isLogedin ? (
                                  <span
                                    className='replyBtn'
                                    onClick={() => setReplyTo(comment)}>
                                    <strong>reply</strong>
                                  </span>
                                ) : null}
                              </div>
                              {comment?.reply?.length > 0 ? (
                                <Collapse
                                  defaultActiveKey={["0"]}
                                  className='showReply'>
                                  <Panel
                                    header={
                                      <div className='showBtn'>
                                        <strong>
                                          {comment?.reply?.length} reply
                                        </strong>
                                      </div>
                                    }
                                    key='1'>
                                    {comment?.reply.map((reply) => (
                                      <div
                                        key={reply?._id}
                                        className='commentsUser'>
                                        <div className='userAvatar'>
                                          <img
                                            src={reply?.user?.imageURL}
                                            alt=''
                                          />
                                        </div>
                                        <div>
                                          <div className='userName'>
                                            <h6>{reply?.user?.name}</h6>{" "}
                                            {/* <strong>240</strong>{" "} */}
                                            <span>
                                              {moment(
                                                reply?.createdAt
                                              ).fromNow()}
                                            </span>
                                          </div>
                                          <p className='aboutUser'>
                                            {reply?.comment}
                                          </p>
                                          <div className='likeArea'>
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: "0.5em",
                                              }}>
                                              <span
                                                onClick={() =>
                                                  dispatch(
                                                    likeReply({
                                                      lessonID:
                                                        currentLesson._id,
                                                      commentID: comment?._id,
                                                      replyID: reply?._id,
                                                    })
                                                  )
                                                }>
                                                {reply?.liked ? (
                                                  <BiSolidLike
                                                    style={{
                                                      fontSize: "16px",
                                                      color:
                                                        "rgb(211, 147, 49)",
                                                    }}
                                                  />
                                                ) : (
                                                  <BiLike
                                                    style={{
                                                      fontSize: "16px",
                                                    }}
                                                  />
                                                )}
                                              </span>
                                              <strong>
                                                {nFormatter(reply?.likes)}
                                              </strong>
                                            </div>
                                            {/* <span className='dislike'>
                                              <img
                                                src='/icons/dislike-icon.svg'
                                                alt=''
                                              />
                                            </span> */}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </Panel>
                                </Collapse>
                              ) : null}
                            </div>
                          </div>

                          {isLogedin && replyTo?._id === comment?._id ? (
                            <div className='commentReply'>
                              <Form
                                form={reply}
                                onFinish={(v) =>
                                  dispatch(
                                    addReply({
                                      lessonID: currentLesson?._id,
                                      commentID: comment?._id,
                                      data: { comment: v.reply },
                                      onResetReply,
                                    })
                                  )
                                }>
                                <Row>
                                  <Col span={2}>
                                    <div className='userAvatar'>
                                      <img src={userProfile?.imageURL} alt='' />
                                    </div>
                                  </Col>
                                  <Col span={16}>
                                    <div className='yourComment'>
                                      <strong>You</strong>
                                      <Form.Item name='reply'>
                                        <Input placeholder='Add a comment reply...' />
                                      </Form.Item>
                                      <div className='buttons'>
                                        <span></span>
                                        {/* <img
                                      src='/icons/emoji-icon.svg'
                                      alt=''
                                      onClick={() =>
                                        setEmojiPicker(!emojiPicker)
                                      }
                                    />
                                    {emojiPicker ? (
                                      <>
                                        <div className='emojiPicker'>
                                          <Picker
                                            data={data}
                                            theme='light'
                                            onEmojiSelect={console.log}
                                            onClickOutside={() => {
                                              if (emojiPicker) {
                                                setEmojiPicker(false);
                                              }
                                            }}
                                          />
                                        </div>
                                      </>
                                    ) : null} */}
                                        <div>
                                          <button
                                            type='button'
                                            onClick={() => setReplyTo(null)}>
                                            Cancel
                                          </button>
                                          <button type='submit'>
                                            {replyLoading ? (
                                              <LoadingOutlined />
                                            ) : (
                                              "reply"
                                            )}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          ) : null}
                        </div>
                      )
                    )}

                    {allComments?.length > 5 ? (
                      <CustomPagination
                        current={currentPage}
                        defaultPageSize={pageSize}
                        total={allComments?.length}
                        onChange={(page) => {
                          setCurrentPage(page);
                        }}
                      />
                    ) : null}

                    {/* <div className='pagination'>
                      <button
                        type='button'
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}>
                        Previous
                      </button>
                      <button
                        type='button'
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={
                          paginate(allComments, currentPage, 5)?.length < 5
                        }>
                        Next
                      </button>
                    </div> */}
                  </>
                ) : (
                  <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <p>Comments Not Found</p>
                  </Col>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </CommentContainer>
  );
};

export default SocialComments;
