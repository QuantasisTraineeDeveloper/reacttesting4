import { Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomContainer } from "./index.style";

const Footer = () => {
  return (
    <CustomContainer>
      <Container fluid>
        <Row align="middle">
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            <div className="footerLogo">
              <img src="/images/footer-logo.svg" alt="" />
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 14 }}>
            <Row gutter={30}>
              <Col span={6}>
                <div className="footerLinks">
                  <Link to="/courses/list">Courses</Link>
                  <Link to="/plans">Subscriptions</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footerLinks">
                  <Link to="/about">About Us</Link>
                  <Link to="/terms&conditions">Terms & Conditions</Link>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footerLinks">
                  <Link to="/liveClasses">Live Zoom Class</Link>
                  <Link to="/internship">Internship</Link>
                  <Link to="/forum">Forum</Link>
                </div>
              </Col>
              <Col span={6}>
                <div className="footerLinks">
                  <Link to="/testimonials">Testimonials</Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 4 }}>
            <div className="socialLinks">
              <h5>Follow Us</h5>
              <div>
                <a href="#">
                  <img src="/icons/f-icon.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/icons/linkedin-icon.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/icons/twitter-icon.svg" alt="" />
                </a>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <p>© 2022 Tansyacademy. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </CustomContainer>
  );
};

export default Footer;
