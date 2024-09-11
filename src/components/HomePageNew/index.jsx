import React from "react";
import SectionOne from "./subcomponents/SectionOne";
import "./index.css";
import Header from "./subcomponents/Header";
import SectionThree from "./subcomponents/SectionThree";
// import SectionForm from './subcomponents/SectionForm';
import SectionTwo from "./subcomponents/SectionTwo";
import SectionFour from "./subcomponents/SectionFour";
import SectionFive from "./subcomponents/SectionFive";

import SectionTestimonial from "./subcomponents/SectionTestimonial";
import FAQ from "./subcomponents/FAQ";
import SectionImage from "./subcomponents/SectionImage";
import Footer from "./subcomponents/Footer";
import Section from "./subcomponents/Section";

const HomePageNew = () => {

  return (
    <>
      <Header />
      <div className="homepage-container">        
        <SectionOne />
        <Section/>
        <SectionThree />
        <SectionFive />
        <SectionFour />
        <SectionImage />
        <SectionTestimonial />
        <FAQ />
        
        <SectionTwo />
        <Footer/>
      </div>
    </>
  );
};

export default HomePageNew;
