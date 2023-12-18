import React from "react";
import { Container } from "react-bootstrap";
import CustomBtn from "../../common/button";
import {
  DiscoverSection,
  ImageArea,
  SectionHeading,
  SpecialistCards,
  Wrapper,
} from "./index.style";

const Services = () => {
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
  return (
    <Wrapper>
      <DiscoverSection>
        <SectionHeading>
          <strong>Our Services</strong>
        </SectionHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed egestas fermentum in dui
          ullamcorper laoreet etiam nulla eu. Sit a tempus enim pellentesque
          iaculis dictum eget elit tempus
        </p>
        <Container fluid>
          <div className='tabsBtn'>
            <a href='#'>
              <img src='/icons/group-user.svg' alt='' />
            </a>
            <a href='#'>
              <img src='/icons/cap-icon.svg' alt='' />
            </a>
            <a href='#'>
              <img src='/icons/spech-icon.svg' alt='' />
            </a>
          </div>
        </Container>
      </DiscoverSection>

      <DiscoverSection>
        <Container>
          <SpecialistCards>
            <div className='cardItems'>
              <ImageArea>
                <div className='image'>
                  <img src='/images/img-10.png' alt='' />
                </div>
                <div className='shadowImg'>
                  <img src='/images/img-10.png' alt='' />
                </div>
              </ImageArea>
              <div className='lists'>
                <div className='cardLabel'>
                  <img src='/icons/group-user.svg' alt='' />
                  <span>Live classes</span>
                </div>
                <h1>
                  435,67 currently enrolled students in 125 different classes
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed egestas fermentum
                  in dui ullamcorper laoreet etiam nulla eu. Sit a tempus enim
                  pellentesque iaculis dictum eget elit tempus
                </p>
                <div className='tags'>
                  <div className='tagsItem'>
                    <p>One-on-one Live Class</p>
                    <h5>$200</h5>
                  </div>
                  <div className='tagsItem'>
                    <p>10+ students</p>
                    <h5>$100</h5>
                  </div>
                  <div className='tagsItem'>
                    <p>Less than 10 students</p>
                    <h5>$50</h5>
                  </div>
                  <div className='tagsItem'>
                    <p>Onsite corporate training</p>
                    <h5>Contact for Price</h5>
                  </div>
                </div>
                <CustomBtn title='Register now' />
              </div>
            </div>
            <div className='cardItems'>
              <ImageArea>
                <div className='image'>
                  <img src='/images/img-11.png' alt='' />
                </div>
                <div className='shadowImg'>
                  <img src='/images/img-11.png' alt='' />
                </div>
              </ImageArea>
              <div className='lists'>
                <div className='cardLabel'>
                  <img src='/icons/cap-icon.svg' alt='' />
                  <span>Unpaid interships</span>
                </div>
                <h1>
                  Internships for database developer, data analysis and data
                  science roles
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed egestas fermentum
                  in dui ullamcorper laoreet etiam nulla eu. Sit a tempus enim
                  pellentesque iaculis dictum eget elit tempus. Lorem ipsum
                  dolor sit amet consectetur. Sed egestas fermentum in dui
                  ullamcorper laoreet etiam nulla eu. Sit a tempus enim
                  pellentesque iaculis dictum eget elit tempus.Lorem ipsum dolor
                  sit amet consectetur. Sed egestas fermentum in dui ullamcorper
                  laoreet etiam nulla eu. Sit a tempus enim pellentesque iaculis
                  dictum eget elit tempus.
                </p>
                <CustomBtn title='Register now' />
              </div>
            </div>
            <div className='cardItems'>
              <ImageArea>
                <div className='image'>
                  <img src='/images/img-12.png' alt='' />
                </div>
                <div className='shadowImg'>
                  <img src='/images/img-12.png' alt='' />
                </div>
              </ImageArea>
              <div className='lists'>
                <div className='cardLabel'>
                  <img src='/icons/group-user.svg' alt='' />
                  <span>Consultancy</span>
                </div>
                <h1>
                  Consultancy for database development, data architecture, data
                  modeling, data analysis and data science
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Sed egestas fermentum
                  in dui ullamcorper laoreet etiam nulla eu. Sit a tempus enim
                  pellentesque iaculis dictum eget elit tempus
                </p>
                <CustomBtn title='Register now' />
              </div>
            </div>
          </SpecialistCards>
        </Container>
      </DiscoverSection>
    </Wrapper>
  );
};

export default Services;
