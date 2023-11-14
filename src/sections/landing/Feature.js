import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

const pageTexts = [
  "Why QRSwift?",
  "QRSwift's user-friendly design ensures that generating QR codes is a seamless experience. No learning curve – just straightforward functionality.",
  "Download on AppStore"
]

const features = [
  {
    icon: "icon-camera-flash",
    title: "Blazing Fast",
    body: "Say goodbye to waiting. QRSwift is optimized for speed, ensuring that your QR codes are ready in the blink of an eye. Time is money, and QRSwift saves you both."
  },
  {
    icon: "icon-layout-11",
    title: "Customize Your Way",
    body: "Make your QR codes stand out. QRSwift offers customization options, allowing you to personalize the design and content of your QR codes. Your brand, your style."
  },
  {
    icon: "icon-ic_file_download_48px",
    title: "Download and Share",
    body: "With QRSwift, it's not just about creating QR codes; it's about sharing them effortlessly. Download your codes with a simple tap and share them with the world."
  },
  {
    icon: "icon-lock-2",
    title: "Secure and Reliable",
    body: "Trust in the security of QRSwift. Your QR codes are generated with security and reliability, designed with privacy in mind, ensuring they work seamlessly every time."
  }
]

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 0;
  right: 0px;
`;

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  img {
    min-width: 100%;
  }
`;

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={60}
      borderRadius="50%"
      color={color}
      fontSize="52px"
      className="d-flex justify-content-center align-items-center"
      css={`
        background-color: ${({ theme, color }) =>
          rgba(theme.colors[color], 0.1)};
      `}
    >
      <i className={`icon ${iconName}`}></i>
    </Box>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="secondary" className="position-relative">
      <ShapeTopRight
        data-aos="fade-left"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgL1FeatureOval} alt="A blue oval, usefull for the design of the page." className="img-fluid" />
      </ShapeTopRight>
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="A blue oval, usefull for the design of the page." className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="pl-lg-5 order-lg-2">
            <div className="feature-content section-title">
              <Title color="light">{pageTexts[0]}</Title>
              <Text color="light" opacity={0.7} mb={4}>
                {pageTexts[1]}
              </Text>

              <a href="https://apps.apple.com/us/app/qrswift/id6470154433" value="App Store" target="_blank">
                <Button variant="outline">{pageTexts[2]}</Button>
              </a>
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <Row>
              <Col md="6">
                <FeatureCard
                  color="primary"
                  iconName={features[0].icon}
                  title={features[0].title}
                >
                  {features[0].body}
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="warning"
                  iconName={features[1].icon}
                  title={features[1].title}
                >
                  {features[1].body}
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="secondary"
                  iconName={features[2].icon}
                  title={features[2].title}
                >
                  {features[2].body}
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="ash"
                  iconName={features[3].icon}
                  title={features[3].title}
                >
                  {features[3].body}
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
