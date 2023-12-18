import { Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsChevronLeft } from "react-icons/bs";
import TextEditor from "../../../../common/editor";
import {
  AddBtn,
  AnswersCard,
  AnswerSection,
  BackBtn,
  HeadingCard,
  Wrapper,
} from "./index.style";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  disLikeThread,
  disLikeThreadReply,
  getSingleThread,
  likeThread,
  likeThreadReply,
} from "../../../../redux/forumSlice";
import TimeAgo from "react-timeago";
import { CodeBlock } from "react-code-blocks";
import LoadingSpinner from "../../../../common/Loading/LoadingSpinner";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const ThreadDetails = () => {
  const [editorState, setEditorState] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { forumID } = useParams();

  useEffect(() => {
    dispatch(getSingleThread(forumID));
  }, []);

  const store = useSelector((state) => state);
  const { singleThread, loading } = store.forum;

  console.log("singleThread", singleThread);

  return (
    <Wrapper>
      <Container>
        <BackBtn
          onClick={(e) => {
            e.preventDefault();
            navigate("/forum");
          }}>
          <span>
            <BsChevronLeft />
          </span>
          <span>Back to questions</span>
        </BackBtn>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <HeadingCard>
                <div className='titleHeading'>
                  <h3>{singleThread?.title}</h3>
                  <span>
                    asked <TimeAgo date={singleThread?.createdAt} />
                  </span>
                </div>
                <div className='showView'>
                  <div>
                    <span>Asked</span>
                    <strong>
                      <TimeAgo date={singleThread?.createdAt} />
                    </strong>
                  </div>
                  <div>
                    <span>Modified</span>
                    <strong>
                      <TimeAgo date={singleThread?.modified} />
                    </strong>
                  </div>
                  <div>
                    <span>Viewed</span>
                    <strong>{singleThread?.viewCount} times</strong>
                  </div>
                </div>
              </HeadingCard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <div>
                <AddBtn
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("forum/add-question");
                  }}>
                  Add question
                </AddBtn>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <AnswersCard>
                <Row>
                  <Col span={2}>
                    <div className='countBtn'>
                      <IoMdArrowDropup
                        onClick={() =>
                          !singleThread?.liked
                            ? dispatch(likeThread(singleThread?._id))
                            : null
                        }
                        className={`icon ${
                          singleThread?.liked && "activeIcon"
                        }`}
                      />
                      <div>
                        <strong>{singleThread?.likes}</strong>
                      </div>
                      <IoMdArrowDropdown
                        onClick={() =>
                          !singleThread?.disliked
                            ? dispatch(disLikeThread(singleThread?._id))
                            : null
                        }
                        className={`icon ${
                          singleThread?.disliked && "activeIcon"
                        }`}
                      />
                    </div>
                    {/* <div className='countBtn'>
                    <span>
                      <img src='/images/fileImage.svg' alt='' />
                    </span>
                    <span>
                      <img src='/images/backImage.svg' alt='' />
                    </span>
                  </div> */}
                  </Col>
                  <Col span={22}>
                    <p>{singleThread?.desc}</p>
                    <CodeBlock
                      customStyle={{
                        margin: "0px 0px 20px 0px",
                        padding: "1rem",
                        borderRadius: "5px",
                        background: "rgba(246, 246, 246, 1)",
                      }}
                      text={String(singleThread?.code)}
                      showLineNumbers={false}
                    />

                    <div className='shareArea'>
                      <div>
                        {singleThread?.tags?.map((tag, i) => (
                          <span className='mySqlBtn3' key={i}>
                            {tag}
                          </span>
                        ))}
                        {/* <div className='voteIcon'>
                        <a href='#'>
                          <img src='/images/userImage.svg' alt='' />
                        </a>
                      </div>
                      <div className='answerIcon'>
                        <a href='#'>
                          <img src='/images/forwardImage.svg' alt='' />
                        </a>
                      </div> */}
                      </div>
                      <div className='andyIcon'>
                        <img
                          src={
                            singleThread?.userId?.imageURL ??
                            "/images/mySqlIconimg4.svg"
                          }
                          alt=''
                        />
                        <div className='andyIconInfo'>
                          <p>{singleThread?.username}</p>
                          {/* <div className='andyIconContent'>
                          <span className='blackText'>11</span>
                          <span className='dot'></span>
                          <span className='grayText'>2</span>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </AnswersCard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <AnswerSection>
                <h1>Answers({singleThread?.reply?.length})</h1>
                {singleThread?.reply?.length > 0 ? (
                  singleThread?.reply?.map((reply, i) => (
                    <AnswersCard key={i}>
                      <Row>
                        <Col span={2}>
                          <div className='countBtn'>
                            <IoMdArrowDropup
                              onClick={() =>
                                !reply?.liked
                                  ? dispatch(
                                      likeThreadReply({
                                        threadID: singleThread?._id,
                                        replyId: reply?._id,
                                      })
                                    )
                                  : null
                              }
                              // className='icon'
                              className={`icon ${reply?.liked && "activeIcon"}`}
                            />
                            <div>
                              <strong>{reply?.likes}</strong>
                            </div>
                            <IoMdArrowDropdown
                              onClick={() =>
                                !reply?.disliked
                                  ? dispatch(
                                      disLikeThreadReply({
                                        threadID: singleThread?._id,
                                        replyId: reply?._id,
                                      })
                                    )
                                  : null
                              }
                              // className='icon'
                              className={`icon ${
                                reply?.disliked && "activeIcon"
                              }`}
                            />
                          </div>
                          {/* <div className='countBtn'>
                            <span>
                              <img src='/images/fileImage.svg' alt='' />
                            </span>
                            <span>
                              <img src='/images/backImage.svg' alt='' />
                            </span>
                          </div> */}
                        </Col>
                        <Col span={22}>
                          <p>{reply?.desc}</p>
                          <CodeBlock
                            customStyle={{
                              margin: "0px 0px 20px 0px",
                              padding: "1rem",
                              borderRadius: "5px",
                              background: "rgba(246, 246, 246, 1)",
                            }}
                            text={String(reply?.code)}
                            showLineNumbers={false}
                          />

                          <div className='shareArea'>
                            <div style={{ width: "75%" }}>
                              <div className='demo'>
                                {/* Check the demo <a href='#'>here</a>. */}
                              </div>
                              <div className='vote'>
                                <span className='time'>
                                  answered <TimeAgo date={reply?.date} />
                                </span>
                                <img src='/images/mySqlIconimg1.svg' alt='' />
                                <span>{reply?.likes} vote</span>
                              </div>
                            </div>
                            <div className='andyIcon'>
                              <img src={reply?.userId?.imageURL} alt='' />
                              <div className='andyIconInfo'>
                                <p> {reply?.username}</p>
                                {/* <div className='andyIconContent'>
                                <span className='blackText'>11</span>
                                <span className='dot'></span>
                                <span className='grayText'>2</span>
                              </div> */}
                              </div>
                            </div>
                          </div>
                          <div className='comments'>
                            {/* <Input placeholder='Add a comment' /> */}
                          </div>
                        </Col>
                      </Row>
                    </AnswersCard>
                  ))
                ) : (
                  <p>No Answer Found</p>
                )}
              </AnswerSection>
              <AnswerSection>
                <h1>your answer</h1>
                <TextEditor
                  editorState={editorState}
                  setEditorState={setEditorState}
                />
                <div>
                  <button className='answerBtn'>Post answer</button>
                  <em>
                    By clicking “Post Your Answer”, you agree to our{" "}
                    <a href='#'>terms of service, privacy policy</a> and{" "}
                    <a href='#'>cookie policy</a>
                  </em>
                  <div className='tagged'>
                    <p>
                      Not the answer you're looking for? Browse other questions
                      tagged :
                    </p>
                    {singleThread?.tags?.map((tag, i) => (
                      <a className='mySqlBtn3' href='#' key={i}>
                        {tag}
                      </a>
                    ))}
                  </div>
                  <p>
                    or <a href='#'>ask your own question.</a>
                  </p>
                </div>
              </AnswerSection>
            </Col>
          </Row>
        )}
      </Container>
    </Wrapper>
  );
};

export default ThreadDetails;
