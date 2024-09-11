import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from '@chakra-ui/react'
// import image from "../../../assets/demo_model.png";
const Testimonial = () => {

  const [isMobile] = useMediaQuery("(max-width: 30px)");
  // const [isTablet] = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  // const [isDesktop] = useMediaQuery("(min-width: 992px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: 4,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
  };


  // const data = [
  //   {
  //     author: "Ishu Darshan",
  //     description:
  //       "I've been using this app for a few months now and it has made my content writing process so much more efficient!",
  //   },
  //   {
  //     author: "Mansi Darshan",
  //     description:
  //       "As a freelance writer, Oyster has been a game changer. It has allowed me to produce high-quality content faster and more efficiently.",
  //   },
  //   {
  //     author: "Akash Mandal",
  //     description:
  //       "I never thought I'd find a platform that could help me with my writing, but this one has exceeded all of my expectations.",
  //   },
  //   {
  //     author: "Karan Darshan",
  //     description:
  //       "As a freelance writer, Oyster has been a game changer. It has allowed me to produce high-quality content faster and more efficiently.",
  //   },
  //   {
  //     author: "Unmoy Biswas",
  //     description:
  //       "I've been using this app for a few months now and it has made my content writing process so much more efficient!",
  //   },
  // ];


  return (
    <div className="testimonial_container">
      <Slider {...settings}>
        <div className="testimonial_card">
          {/* <img src={image} alt="demo_image" /> */}
          <svg className="testimonial_card_image m-auto" viewBox="0 0 49 48" fill="none">
            <path
              d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
              fill="#545454"
            />
          </svg>

          <div className="feedback_stars d-flex justify-content-center align-items-center">
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
          <h6 className="testimonial_author">-Ishu Darshan </h6>


        </div>

        <div className="testimonial_card">
          {/* <img src={image} alt="demo_image" /> */}
          <svg className="testimonial_card_image  m-auto " viewBox="0 0 49 48" fill="none">
            <path
              d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
              fill="#545454"
            />
          </svg>

          <div className="feedback_stars d-flex justify-content-center align-items-center">
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
          <h6 className="testimonial_author">-Ishu Darshan </h6>


        </div>

        <div className="testimonial_card">
          {/* <img src={image} alt="demo_image" /> */}
          <svg className="testimonial_card_image m-auto" viewBox="0 0 49 48" fill="none">
            <path
              d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
              fill="#545454"
            />
          </svg>

          <div className="feedback_stars d-flex justify-content-center align-items-center">
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
          <h6 className="testimonial_author">-Ishu Darshan </h6>


        </div>

        <div className="testimonial_card">
          {/* <img src={image} alt="demo_image" /> */}
          <svg className="testimonial_card_image m-auto" viewBox="0 0 49 48" fill="none">
            <path
              d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
              fill="#545454"
            />
          </svg>

          <div className="feedback_stars d-flex justify-content-center align-items-center">
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
          <h6 className="testimonial_author">-Ishu Darshan </h6>


        </div>

        <div className="testimonial_card">
          {/* <img src={image} alt="demo_image" /> */}
          <svg className="testimonial_card_image m-auto" viewBox="0 0 49 48" fill="none">
            <path
              d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
              fill="#545454"
            />
          </svg>

          <div className="feedback_stars d-flex justify-content-center align-items-center">
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
            <svg viewBox="0 0 20 19" fill="none">
              <path
                d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#3b82f6"
              />
            </svg>
          </div>

          <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
          <h6 className="testimonial_author">-Ishu Darshan </h6>


        </div>
        
      </Slider>
    </div>
  );
};

// {data?.map((item, index) => (
//   <TestimonialCard item={item} key={index} />
// ))}

// function Testimonial() {
//   const [isMobile] = useMediaQuery("(max-width: 767px)");
//   const [isTablet] = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
//   const [isDesktop] = useMediaQuery("(min-width: 992px)");

//   return (
//     <div>
//       {isMobile && <p>Mobile view</p>}
//       {isTablet && <p>Tablet view</p>}
//       {isDesktop && <p>Desktop view</p>}
//     </div>
//   );
// }


export default Testimonial;

// const TestimonialCard = ({ item }) => {
//   return (
//     <>
//       <div className="testimonial_card">
//         {/* <img src={image} alt="demo_image" /> */}
//         <svg className="testimonial_card_image" viewBox="0 0 49 48" fill="none">
//           <path
//             d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
//             fill="#545454"
//           />
//         </svg>

//         <div className="feedback_stars d-flex justify-content-center align-items-center">
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//         </div>

//         <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
//         <h6 className="testimonial_author">-Ishu Darshan </h6>


//       </div>

//       <div className="testimonial_card">
//         {/* <img src={image} alt="demo_image" /> */}
//         <svg className="testimonial_card_image" viewBox="0 0 49 48" fill="none">
//           <path
//             d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
//             fill="#545454"
//           />
//         </svg>

//         <div className="feedback_stars d-flex justify-content-center align-items-center">
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//         </div>

//         <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
//         <h6 className="testimonial_author">-Ishu Darshan </h6>


//       </div>
//       <div className="testimonial_card">
//         {/* <img src={image} alt="demo_image" /> */}
//         <svg className="testimonial_card_image" viewBox="0 0 49 48" fill="none">
//           <path
//             d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
//             fill="#545454"
//           />
//         </svg>

//         <div className="feedback_stars d-flex justify-content-center align-items-center">
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//         </div>

//         <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
//         <h6 className="testimonial_author">-Ishu Darshan </h6>


//       </div>
//       <div className="testimonial_card">
//         {/* <img src={image} alt="demo_image" /> */}
//         <svg className="testimonial_card_image" viewBox="0 0 49 48" fill="none">
//           <path
//             d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
//             fill="#545454"
//           />
//         </svg>

//         <div className="feedback_stars d-flex justify-content-center align-items-center">
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//         </div>

//         <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
//         <h6 className="testimonial_author">-Ishu Darshan </h6>


//       </div>
//       <div className="testimonial_card">
//         {/* <img src={image} alt="demo_image" /> */}
//         <svg className="testimonial_card_image" viewBox="0 0 49 48" fill="none">
//           <path
//             d="M24.1667 40.85C18.125 40.85 12.7842 37.81 9.66667 33.25C9.73917 28.5 19.3333 25.8875 24.1667 25.8875C29 25.8875 38.5942 28.5 38.6667 33.25C37.069 35.588 34.9108 37.504 32.3823 38.8293C29.8537 40.1546 27.0324 40.8485 24.1667 40.85ZM24.1667 7.125C26.0895 7.125 27.9336 7.87567 29.2932 9.21186C30.6528 10.5481 31.4167 12.3603 31.4167 14.25C31.4167 16.1397 30.6528 17.9519 29.2932 19.2881C27.9336 20.6243 26.0895 21.375 24.1667 21.375C22.2438 21.375 20.3998 20.6243 19.0401 19.2881C17.6805 17.9519 16.9167 16.1397 16.9167 14.25C16.9167 12.3603 17.6805 10.5481 19.0401 9.21186C20.3998 7.87567 22.2438 7.125 24.1667 7.125ZM24.1667 0C20.9931 0 17.8505 0.614312 14.9185 1.80786C11.9864 3.00141 9.32234 4.75082 7.07825 6.95621C2.54612 11.4102 0 17.4511 0 23.75C0 30.0489 2.54612 36.0898 7.07825 40.5438C9.32234 42.7492 11.9864 44.4986 14.9185 45.6921C17.8505 46.8857 20.9931 47.5 24.1667 47.5C30.5761 47.5 36.723 44.9978 41.2551 40.5438C45.7872 36.0898 48.3333 30.0489 48.3333 23.75C48.3333 10.6162 37.4583 0 24.1667 0Z"
//             fill="#545454"
//           />
//         </svg>

//         <div className="feedback_stars d-flex justify-content-center align-items-center">
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//           <svg viewBox="0 0 20 19" fill="none">
//             <path
//               d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
//               fill="#3b82f6"
//             />
//           </svg>
//         </div>

//         <p>I've been using this app for a few months now and it has made my content writing process so much more efficient! </p>
//         <h6 className="testimonial_author">-Ishu Darshan </h6>


//       </div>



//     </>

//   );
// };
//     <p>{item.description}</p>
    // <h6 className="testimonial_author">-{item.author}</h6>
