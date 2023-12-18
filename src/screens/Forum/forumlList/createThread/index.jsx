import { Checkbox, Col, Collapse, Form, Input, Row, Select } from "antd";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CustomBtn from "../../../../common/button";
import TextEditor from "../../../../common/editor";
import { CustomInput } from "../../../../common/input/index.style";
import { SectionHeading } from "../../../home/index.style";
import {
  AnswerArea,
  AnswerContent,
  Answers,
  QuestionSteps,
  QustionArea,
  Wrapper,
} from "./index.style";
import { antValidator } from "../../../../utils/helper";
import { threadScheme } from "../../../../utils/validationSchema";
import { useDispatch, useSelector } from "react-redux";
const options = [];
const { Panel } = Collapse;

const CreateThread = () => {
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [rules, setRules] = useState({});
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading } = store?.forum;

  const [form] = Form.useForm();

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }
  const onChange = (key) => {
    console.log(key);
  };

  useEffect(() => {
    setRules(antValidator(threadScheme));
  }, []);

  const onThreadSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <Container fluid>
        <SectionHeading>Ask a Public Question</SectionHeading>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 16 }}>
            <QuestionSteps>
              <img src='/icons/info.svg' alt='' />
              <h5>Writing a good question</h5>
              <p>
                You’re ready to <u>ask</u> a <u>programming-related question</u>{" "}
                and this form will help guide you through the process. Looking
                to ask a non-programming question? See <u>the topics here </u>{" "}
                to find a relevant site.
              </p>
              <h6>Steps</h6>
              <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </QuestionSteps>
            <Form onFinish={onThreadSubmit} form={form}>
              <QustionArea>
                <h3>Title</h3>
                <p>
                  Be specific and imagine you’re asking a question to another
                  person.
                </p>
                <CustomInput name='title' rules={[rules]}>
                  <Input />
                </CustomInput>
              </QustionArea>

              <QustionArea>
                <h3>What are the details of your problem?</h3>
                <p>
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </p>
                <CustomInput name='description' rules={[rules]}>
                  <TextEditor
                    editorState={description}
                    setEditorState={setDescription}
                  />
                </CustomInput>
              </QustionArea>
              <QustionArea>
                <h3>Your code that you tried and what were you expecting?</h3>
                <p>
                  Describe what you tried, what you expected to happen, and what
                  actually resulted. Minimum 20 characters.
                </p>
                <CustomInput name='code' rules={[rules]}>
                  <TextEditor editorState={code} setEditorState={setCode} />
                </CustomInput>
              </QustionArea>
              <QustionArea>
                <h3>Tags</h3>
                <p>
                  Add up to 5 tags to describe what your question is about.
                  Start typing to see suggestions.
                </p>
                <CustomInput name='tags'>
                  <Select
                    mode='tags'
                    style={{
                      width: "100%",
                    }}
                    // onChange={handleChange}
                    tokenSeparators={[","]}
                    options={options}
                  />
                </CustomInput>
              </QustionArea>
              {/* <QustionArea>
                <h3>
                  Review questions already on Stack Overflow to see if your
                  question is a duplicate.
                </h3>
                <p>
                  Clicking on these questions will open them in a new tab for
                  you to review. Your progress here will be saved so you can
                  come back and continue.
                </p>
                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel
                    header={
                      <h3>Do any of these posts answer your question?</h3>
                    }
                    key='1'>
                    <AnswerArea>
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
                          <Answers>2 answers</Answers>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 20 }}>
                          <AnswerContent>
                            <h5>How to structure tables?</h5>
                            <p>
                              Hi. I'm studying MySQL. From MySQL architecture
                              diagram, what is SQL interface? and difference
                              from Parser?
                            </p>
                            <div>
                              asked <u>Dec 3, 2017 at 8:28</u> by{" "}
                              <a href='#'>KyungHun Jeon</a>
                            </div>
                          </AnswerContent>
                        </Col>
                      </Row>
                    </AnswerArea>
                    <AnswerArea>
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
                          <Answers>2 answers</Answers>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 20 }}>
                          <AnswerContent>
                            <h5>How to structure tables?</h5>
                            <p>
                              Hi. I'm studying MySQL. From MySQL architecture
                              diagram, what is SQL interface? and difference
                              from Parser?
                            </p>
                            <div>
                              asked <u>Dec 3, 2017 at 8:28</u> by{" "}
                              <a href='#'>KyungHun Jeon</a>
                            </div>
                          </AnswerContent>
                        </Col>
                      </Row>
                    </AnswerArea>
                    <AnswerArea>
                      <Row>
                        <Col xs={{ span: 24 }} lg={{ span: 4 }}>
                          <Answers>2 answers</Answers>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 20 }}>
                          <AnswerContent>
                            <h5>How to structure tables?</h5>
                            <p>
                              Hi. I'm studying MySQL. From MySQL architecture
                              diagram, what is SQL interface? and difference
                              from Parser?
                            </p>
                            <div>
                              asked <u>Dec 3, 2017 at 8:28</u> by{" "}
                              <a href='#'>KyungHun Jeon</a>
                            </div>
                          </AnswerContent>
                        </Col>
                      </Row>
                    </AnswerArea>
                  </Panel>
                </Collapse>
              </QustionArea> */}
              <div className='checkboxs'>
                <Checkbox>
                  I confirm that none of these posts answers my question.
                </Checkbox>
              </div>
              <CustomBtn
                type='submit'
                title='Post question'
                loading={loading}
                disable={loading}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CreateThread;
