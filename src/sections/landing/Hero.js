import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
import imgL1HeroIcon from "../../assets/image/png/favicon.png";

const heroTexts = [
  "Your Swift Solution for QR Codes!",
  "Generate QR Codes in the Blink of an Eye. QRSwift is your go-to app for lightning-fast QR code creation. Whether you're a business owner, marketer, or just someone who loves efficiency, QRSwift has you covered.",
  "Download on AppStore"
];

const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Hero = () => {
  
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>
        <ShapeTopLeft>
          <img src={svgHeroShape} alt="A circular shape with a light blue color in it." className="img-fluid" />
        </ShapeTopLeft>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="5" md="8" sm="9" className="order-lg-2">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <ImgRight src={imgL1HeroIcon} alt="QRSwift app logo" />
                </div>

              </div>
            </Col>
            <Col lg="7" className="order-lg-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero">
                    {heroTexts[0]}
                  </Title>
                  <Text mb={4}>
                    {heroTexts[1]}
                  </Text>
                  <div className="d-flex flex-column align-items-start">
                    <a href="https://apps.apple.com/us/app/qrswift/id6470154433" value="App Store" target="_blank"><Button mb={3}>{heroTexts[2]}</Button></a>
                  </div>
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
