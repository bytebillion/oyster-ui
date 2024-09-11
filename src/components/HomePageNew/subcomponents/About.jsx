import React from "react";
import Header from "./Header";
import aboutusImg from "../../../assets/ABOUT US.svg";
import aboutSectionTwo from "../../../assets/photo-of-woman-wearing-eyeglasses-3184405.png";
import vision from "../../../assets/Our Vision.svg";
import mission from "../../../assets/Our mission.svg";
import imgHome1 from "../../../assets/Group 28 (2).png";
import imgHome2 from "../../../assets/Group 28.png";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />

      <div className="about-section">
        <div className="about-cont-one">
          <div className="about-box-one">
            <img className="about-us-img" src={aboutusImg} alt="" />
            At Oyster, we are driven by a simple yet powerful mission: to
            empower writers, professionals, and learners to enhance their
            efficiency and refine their communication.
          </div>
          <div className="about-box-two">
            Founded in 2022, we take immense pride in being the pioneers of an
            innovative grammar and writing assistance platform from the heart of
            India. Our journey began with a vision to offer a sophisticated tool
            that can not only help users write better but also work smarter
          </div>
        </div>
        <div className="about-cont-two">
          <img className="about-two-img" src={aboutSectionTwo} alt="" />
        </div>
        <div className="about-cont-three">
          <div className="about-mission">
            <img className="about-mission-img" src={mission} alt="" />
            <h3 className="about-heading">Efficiency Unleashed</h3>
            <p className="about-para">
              We understand that in today's fast-paced digital world, every
              second counts. That's why we have diligentlyly crafted our
              platform to be a paragon of efficiency. Our cutting-edge
              technology not only corrects grammar and spelling but also
              provides real-time suggestions, enabling you to write more
              efficiently and with confidence
            </p>
          </div>
          <div className="about-vision">
            <img className="about-vision-img" src={vision} alt="" />
            <h3 className="about-heading"> Made in India, Serving the World</h3>
            <p className="about-para">
              Being a homegrown Indian company, we have channeled the spirit of
              innovation, diversity, and inclusivity into our platform. We take
              immense pride in representing India on the global stage. Our AI
              powered tool is used by individuals, professionals, and
              organisations from all corners of the world, and we are constantly
              working to cater to the diverse needs of our global user base.
            </p>
          </div>
        </div>
        <div className="about-cont-four">
          <div className="about-img-box-1">
            <div className="about-left">
              <h3 className="about-heading">A Commitment to Excellence</h3>
              <p className="about-para">
                We are not just about words; we are about results. Our team
                comprises passionate individuals who are committed to enhancing
                your writing, fostering better communication, and ultimately
                making you more efficient in your endeavors. We take your
                feedback seriously and continuously evolve to meet your evolving
                needs.
              </p>
            </div>
            <div className="about-right">
              <img className="box-img-about" src={imgHome2} alt="" />
            </div>
          </div>
          <div className="about-img-box-2">
            <div className="about-left">
              <img className="box-img-about" src={imgHome1} alt="" />
            </div>
            <div className="about-right">
              <h3 className="about-heading">Join Us on the Journey</h3>
              <p className="about-para">
                Whether you are a professional seeking to sharpen your
                communication, a student aiming for academic excellence, or a
                content creator pushing the boundaries of creativity, we invite
                you to join us on this journey. Together, we can transform the
                way you write, work, and communicate.Thank you for choosing
                Oyster as your trusted partner in efficiency. We are excited to
                be a part of your journey towards success, one word at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
