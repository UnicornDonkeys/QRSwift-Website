import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import PageWrapper from "../components/PageWrapper";
import { Section, Title, Text, Box, List } from "../components/Core";

const privacyTexts = [
  "Terms & Conditions",
  "Last updated: 14/11/2023.",
  "Welcome to QRSwift! This Privacy Policy explains how we collect, use, and protect any information you provide while using our QR code generation app.",
  "License",
  "By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with the Author, and you are required to abide by the following licensing terms.",
  "QRSwift is designed to respect your privacy, and as such, we do not collect any personal information. We do not gather, store, or process any data that could be used to identify individuals.",
  "Security",
  "You have rights for royalty free use the generated qr-codes for any or all of your personal and commercial projects.",
  "You are not required to attribute or link to QRSwift in any of projects.",
  "We reserve the rights to change prices and revise the resources usage policy in any moment.",
  "Usage of QR Codes",
  "QRSwift is a tool for generating QR codes, and any data contained within the QR codes you create is not collected or stored by us. The generated QR codes are solely under your control, and their content is your responsibility.",
  "Our app may contain links to external websites or services. Please note that we are not responsible for the privacy practices or content of these external sites.",
  "Changes about terms",
  "We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the date of the last update will be modified accordingly.",
  "Contact Us",
  "If you have any questions or concerns about this Privacy Policy, please contact us at qrswift@unicorndonkeys.com. By using QRSwift, you agree to the terms outlined in this Privacy Policy."
]

const PrivacyPolicy = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Section>
          <div className="pt-5"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg="9" xl="8">
                <Title variant="hero" className="text-center">
                  {privacyTexts[0]}
                </Title>
                <Text variant="small">
                  {privacyTexts[1]}
                </Text>
                <Text mt={["40px", null, "50px"]} variant="small">
                  {privacyTexts[2]}
                </Text>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    {privacyTexts[3]}
                  </Title>
                  <Text variant="small">
                    {privacyTexts[4]}
                  </Text>
                  <Text variant="small">
                    {privacyTexts[5]}
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    {privacyTexts[6]}
                  </Title>
                  <List>
                    <li>
                      {privacyTexts[7]}
                    </li>
                    <li>
                      {privacyTexts[8]}
                    </li>
                    <li>
                      {privacyTexts[9]}
                    </li>
                  </List>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    {privacyTexts[10]}
                  </Title>
                  <Text variant="small">
                    {privacyTexts[11]}
                  </Text>
                  <Text variant="small">
                    {privacyTexts[12]}
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    {privacyTexts[13]}
                  </Title>
                  <Text variant="small">
                    {privacyTexts[14]}
                  </Text>
                </Box>

                <Box mt={["40px", null, "50px"]}>
                  <Title variant="card" fontSize="2rem" mb="30px">
                    {privacyTexts[15]}
                  </Title>
                  <Text variant="small">
                    {privacyTexts[16]}
                  </Text>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
};
export default PrivacyPolicy;
