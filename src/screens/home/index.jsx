import { Col, Form, Input, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { GrSearch } from "react-icons/gr";
import CustomBtn from "../../common/button";
import SqlCard from "../../components/cards/homeSql";
import CodeSection from "../../components/CodeSection";
import {
  DiscoverSection,
  FormArea,
  HomeSection,
  ImageArea,
  MainHeading,
  MobileImg,
  SectionHeading,
  SpecialistCards,
  Wrapper,
} from "./index.style";
import { useDispatch, useSelector } from "react-redux";
import { searchTool } from "../../redux/toolSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state?.tool);

  const carddata = [
    {
      image: "time.png",
      desc: "Courses Length",
      month: "3 - 4 months",
    },
    {
      image: "code.png",
      desc: "Experience",
      month: "Not Required",
    },
    {
      image: "book.png",
      desc: "Number of Cources",
      month: "20+",
    },
  ];

  const onFinish = ({ search }) => {
    const data = {
      search,
      searchIn: [],
    };

    dispatch(searchTool({ data, navigate }));
  };

  return (
    <Wrapper>
      <HomeSection>
        <MobileImg>
          <img src='/images/cu-m.png' alt='' />
          <div className='visits'>
            <p>Students visits</p>
            <h2>10M</h2>
          </div>
        </MobileImg>
        <Form onFinish={onFinish}>
          <MainHeading>
            Make <br />
            learning <strong>SQL&nbsp;</strong>
            <br />
            very simple
          </MainHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus tellus lectus non
            commodo montes mauris. Cras proin eget dictum hendrerit.
          </p>
          <FormArea>
            <Row gutter={12}>
              <Col xs={{ span: 24 }} lg={{ span: 14 }}>
                <Form.Item name='search'>
                  <Input
                    prefix={<GrSearch />}
                    placeholder='Find the course you are looking for'
                  />
                </Form.Item>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 6 }}>
                <div className='searchBtn'>
                  <CustomBtn
                    htmlType='submit'
                    type='submit'
                    title='Search'
                    loading={loading}
                    disable={loading}
                  />
                </div>
              </Col>
            </Row>
          </FormArea>
        </Form>

        <ImageArea>
          <img src='/images/cu.png' alt='' />
          <div className='visits'>
            <p>Students visits</p>
            <h2>10M</h2>
          </div>
        </ImageArea>
      </HomeSection>

      <DiscoverSection>
        <SectionHeading>
          Discover the fundamentals of&nbsp;
          <strong>MySQL™,Oracle, PostgreSQL & Microsoft SQL Server</strong>
        </SectionHeading>
        <p>
          With our online MySQL editor, you can edit the SQL statements, and
          click on a button to view the result
        </p>
        <Container fluid>
          <Row gutter={0}>
            {carddata.map((item, i) => (
              <Col key={i} xs={{ span: 24 }} lg={{ span: 8 }}>
                <div>
                  <SqlCard data={item} />
                </div>
              </Col>
            ))}
          </Row>
          <div className='tryBtn'>
            <CustomBtn title='Try it now' />
          </div>
        </Container>
      </DiscoverSection>

      <DiscoverSection>
        <SectionHeading>
          Become a&nbsp;
          <strong>Data Specialist</strong>
        </SectionHeading>
        <p>
          With our online MySQL editor, you can edit the SQL statements, and
          click on a button to view the resul
        </p>
        <Container fluid>
          <SpecialistCards>
            <div className='cardItems'>
              <div>
                <img src='/images/fish.png' alt='' />
              </div>
              <div className='lists'>
                <h1>MySQL</h1>
                <p>Basic to advanced Training</p>
                <ul>
                  <li>10+ Hours basics course.</li>
                  <li>15+ hours advanced course.</li>
                  <li>Free snippets.</li>
                  <li>Professional certification on completion.</li>
                </ul>
                <CustomBtn title='Get Enrolled' />
              </div>
            </div>
            <div className='cardItems'>
              <div>
                <img src='/images/oracle.png' alt='' />
              </div>
              <div className='lists'>
                <h1>Oracle</h1>
                <p>Basic to advanced Training</p>
                <ul>
                  <li>10+ Hours basics course.</li>
                  <li>15+ hours advanced course.</li>
                  <li>Free snippets.</li>
                  <li>Professional certification on completion.</li>
                </ul>
                <CustomBtn title='Get Enrolled' />
              </div>
            </div>
            <div className='cardItems'>
              <div>
                <img src='/images/elepant.png' alt='' />
              </div>
              <div className='lists'>
                <h1>PostgreSQL</h1>
                <p>Basic to advanced Training</p>
                <ul>
                  <li>10+ Hours basics course.</li>
                  <li>15+ hours advanced course.</li>
                  <li>Free snippets.</li>
                  <li>Professional certification on completion.</li>
                </ul>
                <CustomBtn title='Get Enrolled' />
              </div>
            </div>
            <div className='cardItems'>
              <div>
                <img src='/images/sql.png' alt='' />
              </div>
              <div className='lists'>
                <h1>Microsoft SQL Server</h1>
                <p>Basic to advanced Training</p>
                <ul>
                  <li>10+ Hours basics course.</li>
                  <li>15+ hours advanced course.</li>
                  <li>Free snippets.</li>
                  <li>Professional certification on completion.</li>
                </ul>
                <CustomBtn title='Get Enrolled' />
              </div>
            </div>
          </SpecialistCards>
        </Container>
        <CodeSection />
      </DiscoverSection>
    </Wrapper>
  );
};

export default Home;
