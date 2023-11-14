import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import {
  Title,
  Button,
  Section,
  Box,
  Text,
} from "../../components/Core";

import imgOval from "../../assets/image/png/l1-cta-oval.png";
import svgCurve from "../../assets/image/svg/l1-curve-cta.svg";

const pageTexts = [
  "Ready to Elevate Your QR Code Experience?",
  "Download QRSwift now and embark on a journey of innovation and efficiency. Transform the way you connect with your audience through personalized and swift QR code experiences.",
  "Download on AppStore"
]

const LeftCard = styled(Box)`
  position: absolute;
  top: 0;
  left: 0px;
`;

const RightCard = styled(Box)`
  position: absolute;
  top: 0;
  right: -275px;
`;

const Cta = () => (
  <>
    <Section bg="dark" className="position-relative">
      <LeftCard
        data-aos="fade-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgOval} alt="" className="img-fluid" />
      </LeftCard>
      <RightCard>
        <img src={svgCurve} alt="" className="img-fluid" />
      </RightCard>
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" xl="6">
            <Box mb={5} className="text-center">
              <Title color="light">{pageTexts[0]}</Title>
              <Text color="light" opacity={0.7}>
                {pageTexts[1]}
              </Text>
            </Box>
            <a href="https://apps.apple.com/us/app/qrswift/id6470154433" value="App Store" target="_blank">
              <Button width="100%" borderRadius={10}>
                {pageTexts[2]}
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Cta;
