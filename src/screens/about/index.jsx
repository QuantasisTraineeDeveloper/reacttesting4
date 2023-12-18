import { Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { SectionHeading } from "../home/index.style";
import { CardHeader, Wrapper } from "./index.style";

const About = () => {
  return (
    <Wrapper>
      <SectionHeading>About Us</SectionHeading>
      <div>
        <Container fluid>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <div>
                <div className="userCard">
                  <CardHeader>
                    <img src="/images/img.png" alt="" />
                  </CardHeader>
                  <span>CEO & Founder</span>
                  <h4>John Doe</h4>
                  <div>
                    <a href="#">
                      <img src="/icons/in-icon.svg" alt="" />
                    </a>
                  </div>
                  <p>
                    <div>
                      <strong>"</strong>
                    </div>
                    Lorem ipsum dolor sit amet consectetur. Volutpat lectus.
                    <div className="text-end">
                      <strong>"</strong>
                    </div>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 16 }}>
              <div className="about">
                <h4>OUR STORY</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. In phasellus et nec
                  sollicitudin augue aliquam eget. Proin diam nunc quis
                  pharetra. Rhoncus tempor lacus erat sed. Quisque velit netus
                  aliquet sem fames vulputate sollicitudin. Tempus nulla diam
                  lectus ipsum venenatis laoreet. In lobortis odio est et tortor
                  diam et mi rutrum. Ultrices non feugiat mi egestas dignissim
                  gravida. Auctor in lorem platea volutpat. Dolor adipiscing
                  consectetur fusce fringilla. Vitae tempor purus elementum nec
                  in. Turpis diam nam varius nibh. Sed consequat vitae lacus
                  pharetra. Egestas etiam volutpat risus volutpat ut habitant
                  facilisis lectus. Sem magna placerat enim feugiat orci
                  faucibus ante euismod. Vestibulum feugiat tincidunt justo at
                  pellentesque nisl eros id. Dui convallis sem egestas nunc sed
                  euismod enim nec. Nibh diam malesuada sit aliquam diam
                  scelerisque magna. Massa purus suspendisse orci in. Tristique
                  facilisis amet ut eleifend vulputate. <br /> Sed amet pharetra
                  convallis vitae in condimentum varius eget ipsum. Dolor
                  laoreet sed etiam lacinia tellus. Dictum posuere pretium et
                  est faucibus vitae fusce. Ut in leo felis mattis arcu. Sit at
                  magna sed diam at. Egestas scelerisque sed tempus massa
                  ultrices tempus in dictumst et. Netus quis gravida magna
                  convallis accumsan volutpat malesuada. Sed laoreet in aliquam
                  placerat a. Dignissim velit adipiscing adipiscing in non. Leo
                  fames enim blandit semper semper dignissim ac. Sed nisi id eu
                  ridiculus. Nulla neque sed tellus sit dis pharetra. Facilisis
                  enim ut integer etiam in ultrices pharetra ultrices sed.
                  <br />
                  Feugiat leo feugiat placerat cum sagittis urna mi. Donec nam
                  cras arcu turpis arcu sem malesuada ultrices tempus. Non
                  dignissim laoreet tellus hac suscipit. Elementum condimentum
                  dolor ante in morbi amet nulla. Integer aliquam cursus amet
                  hendrerit est. Vel proin enim risus in eget ornare faucibus
                  eget proin. Fermentum consectetur et cras at lectus in congue.
                  Dui cursus leo scelerisque amet. A ullamcorper elementum
                  sapien id hendrerit vestibulum ut integer proin. Ultrices
                  ullamcorper odio vitae id consectetur. Mattis amet sed id amet
                  tempor. Donec nec ut adipiscing integer risus fermentum
                  dictumst aliquet egestas. <br /> Faucibus ac et elit ac amet
                  urna mauris elementum. Nec ultricies eu felis tristique. Quam
                  euismod tellus nunc cursus viverra at sed elit felis. Eget
                  senectus aenean fames enim elementum sit nibh ipsum vitae. At
                  aliquam integer habitasse arcu morbi nisi nullam ut ac. Est
                  tortor lectus ut velit accumsan diam. In accumsan mi non
                  congue. Pretium orci nulla accumsan quis. <br /> Turpis eget
                  quam ante nulla ultricies. Quis pulvinar tincidunt risus
                  posuere. Adipiscing ultrices in consectetur nibh sit. Enim
                  tempor non dui pharetra pretium arcu. Augue tincidunt faucibus
                  iaculis faucibus. Vulputate faucibus nunc leo aenean maecenas
                  sed. Faucibus libero libero leo eget velit ac sed nec odio.
                  Enim consequat egestas gravida tortor pellentesque porttitor.
                  Facilisis tellus nulla nulla id id in ut viverra leo. Sit
                  metus erat lobortis integer aliquam in. Urna fames a dolor
                  consectetur mattis diam a amet. Ac libero sagittis vitae lacus
                  sed fusce nam pharetra nunc. In massa purus vestibulum magna
                  feugiat justo. Vitae eget est faucibus eleifend imperdiet.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
};

export default About;
