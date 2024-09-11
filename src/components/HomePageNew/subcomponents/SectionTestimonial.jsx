// SectionTestimonial.js

import React, { useEffect } from "react";
import "./SectionTestimonial.css";
import testImg1 from "../../../assets/Testimonial1.png";
import TopLeft from "../../../assets/inverted 1 (1).svg";
import BottomRight from "../../../assets/inverted 1 (2).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "PRIYANSHU DATTA",
    designation: "CEO, Company A",
    description:
      "As a college student, juggling multiple assignments and reports can be overwhelming. Oyster has been a lifesaver. It helps me not only fix my grammar and spelling mistakes but also provides valuable insights to improve my writing style. Thanks to Oyster, my grades have improved, and I feel more confident in my academic work.",
    image: testImg1,
  },
  {
    id: 2,
    name: "JVAISHALI BHATT",
    designation: "COO, Company B",
    description:
      "I can't express how much Oyster has improved my writing. As a content writer, I rely on it daily to catch those tricky grammar errors and suggest better word choices. It's like having a personal editor by my side, and it has made a significant difference in the quality of my work.",
    image: testImg1,
  },
  {
    id: 3,
    name: "CHARVI JHA",
    designation: "CTO, Company C",
    description:
      "Oyster has become an indispensable tool for my emails, reports, and presentations. It ensures that I sound polished and error-free, which reflects positively on my business. I highly recommend it to anyone striving for excellence in their written communication.",
    image: testImg1,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000, // Set autoplay speed to 4000 milliseconds (4 seconds)
};

function SectionTestimonial() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Manually move to the next slide
      document.querySelector(".slick-next").click();
    }, settings.autoplaySpeed);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div className="testimonial-slider" key={testimonial.id}>
            <div className="testimonial-slide">
              <div className="column-right">
                <div className="testimonial-buttons">
                  <button className="slide-button">TESTIMONIAL’S</button>
                </div>
                <div className="description-container">
                  <img className="top-left-image" src={TopLeft} alt="" />
                  <p className="testimonial-description">
                    {testimonial.description}
                  </p>
                  <div className="testimonial-bottom-image">
                    <img
                      className="bottom-right-image"
                      src={BottomRight}
                      alt=""
                    />
                  </div>
                </div>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-designation">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SectionTestimonial;
