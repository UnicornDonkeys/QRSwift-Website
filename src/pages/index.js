import React from "react";
import Hero from "../sections/landing1/Hero";
//import Clients from "../sections/landing1/Clients";
import Feature from "../sections/landing1/Feature";
import Content1 from "../sections/landing1/Content1";
//import Content2 from "../sections/landing1/Content2";
//import Testimonial from "../sections/landing1/Testimonial";
import Cta from "../sections/landing1/Cta";
import PageWrapper from "../components/PageWrapper";

const IndexPage = () => {
  return (
    <>
      <PageWrapper footerDark>
        <Hero />
        <Feature />
        <Content1 />
        <Cta />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
