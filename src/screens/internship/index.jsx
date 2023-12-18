import React from "react";
import { Container } from "./index.style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomBtn from "../../common/button";

const Internship = () => {
  const statisticsData = [
    { title: "SQL Database Administration", internships: 65 },
    { title: "SQL Programming", internships: 50 },
    { title: "SQL Data Analysis", internships: 30 },
    { title: "SQL Business Intelligence", internships: 15 },
  ];

  const codingExperienceData = [
    "Unique opportunity for students to contribute to SQL courses and enhance skills",
    "Assist instructors in developing SQL course materials",
    "Support fellow students in grasping complex SQL concepts",
    "Facilitate discussions on SQL best practices",
    "Gain hands-on experience in teaching and curriculum development",
    "Provide valuable student support",
    "Prepares interns for careers in education and database management",
  ];

  const appDeveloperData = [
    "Ideal for technology and software development enthusiasts",
    "Explore growth opportunities within the SQL realm",
    "Collaborate with our development team for innovative applications",
    "Utilize SQL databases to enhance applications",
    "Contribute to the evolving field of data-driven applications",
    "Perfect chance for aspiring developers to make a digital mark",
    "Fusion of technology, innovation, and SQL expertise",
  ];

  const appDeveloperSubData = [
    "Data mining Specialists",
    "SQL Programmers",
    "Data analysts",
  ];

  const columns = [
    {
      sm: 3,
      iconSrc: "/icons/field_icon.svg",
      iconClassName: "icon_trans",
      subTitle: "Choose Field",
      description: "Select your desired field from available vacancies",
    },
    {
      sm: 1,
      iconSrc: "/icons/curve_icon.svg",
      iconClassName: "icon_curve",
    },
    {
      sm: 3,
      iconSrc: "/icons/fillForm_icon.svg",
      iconClassName: "icon_trans",
      subTitle: "Fill Form",
      description: "Fill out the required information in the form",
    },
    {
      sm: 1,
      iconSrc: "/icons/curve_icon.svg",
      iconClassName: "icon_curve",
    },
    {
      sm: 3,
      iconSrc: "/icons/allDone_icon.svg",
      iconClassName: "icon_trans",
      subTitle: "All Done!",
      description: "Now just wait for the interview call for final selection",
    },
  ];

  return (
    <Container>
      <div className="row">
        <h2 className="heading">Internships</h2>
        <p className="description text-sm-left text-lg-center">
          Our internship program opens doors to a wide range of fields, with a
          proven track record of success. Explore the sections below to learn
          more about our internship statistics, training assistant roles, app
          developer positions, and our streamlined application process.
        </p>
      </div>

      <Row fluid={true} className="pt-lg-5 pt-sm-5">
        <Col className="text-sm-center text-lg-start" xs={12} lg={6}>
          <img className="img" src="/images/statistics.svg" alt="" />
        </Col>
        <Col className="pt-2 d-flex justify-content-center" xs={12} lg={6}>
          <div className="wd">
            <div className="sub-title">
              <span>
                <img className="icon" src="/icons/statistics_icon.svg" alt="" />
              </span>
              Statistics
            </div>
            <p className="title">
              150+ Students Connected to Real-World Experience
            </p>
            <p className="description">
              At Tansy Academy, we take pride in our commitment to nurturing
              talent and fostering connections between our students and industry
              professionals. Our internship program has successfully placed over
              150 students in various fields, including but not limited to:
            </p>
            <Row className="pt-4 gy-3">
              {statisticsData.map((item, index) => (
                <Col xs={6} key={index}>
                  <p className="sub_desc mb-sub_desc">{item.title}</p>
                  <p className="sub_text">{item.internships} internships</p>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col
          xs={12}
          lg={6}
          className="text-sm-center text-lg-end order-1 order-lg-2"
        >
          <img className="img" src="/images/coding_Experience.svg" alt="" />
        </Col>
        <Col className="pt-2 d-flex justify-content-center order-2 order-lg-1">
          <div className="wd">
            <p className="sub-title">
              <span>
                <img className="icon" src="/icons/path_icon.svg" alt="" />
              </span>
              Path to LIVE web application CODING Experience
            </p>
            <p className="title">Shaping Future Professionals</p>
            <div className="text-left ul_description">
              <ul>
                {codingExperienceData.map((item, index) => (
                  <li component="li" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="pt-5">
        <Col xs={12} lg={6} className="text-sm-center text-lg-start">
          <img className="img" src="/images/app_Developer.svg" alt="" />
        </Col>
        <Col className="pt-2 d-flex justify-content-center">
          <div className="wd">
            <p className="sub-title">
              <span>
                <img className="icon" src="/icons/people_icon.svg" alt="" />
              </span>
              App Developer Positions
            </p>
            <p className="title">Innovate with Us</p>
            <div className="text-left ul_description">
              <ul>
                {appDeveloperData.map((item, index) => (
                  <li component="li" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="container">
              <p className="sub_text">65 internships</p>
              <div className="row gx-3 gy-3">
                {appDeveloperSubData.map((item, index) => (
                  <Col xs={6} key={index}>
                    <li className="sub_desc">{item}</li>
                  </Col>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className=" pt-5 justify-content-center">
        <Col xs={12} className="text-center">
          <div className="d-flex justify-content-center">
            <p className="sub-title">
              <span>
                <img className="icon" src="/icons/process_icon.svg" alt="" />
              </span>
              Process
            </p>
          </div>
          <h2 className=" mb-2 title">
            Your Path to a Transformative Experience
          </h2>

          <Row className="mt-5 pb-5 justify-content-center align-items-center">
            {columns.map((column, index) => (
              <Col sm={column.sm} key={index} className="text-center">
                {column.iconSrc && (
                  <img
                    className={column.iconClassName}
                    src={column.iconSrc}
                    alt=""
                  />
                )}
                {column.subTitle && (
                  <p className="sub-title text-center">{column.subTitle}</p>
                )}
                {column.description && (
                  <p className="description text-center">
                    {column.description}
                  </p>
                )}
              </Col>
            ))}
          </Row>

          <div className=" mt-4 mb-5 d-flex justify-content-center">
            <div className="searchBtn">
              <CustomBtn title="Register now" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Internship;
