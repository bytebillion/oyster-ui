import React, { useEffect, useState } from "react";
import cardsData from "../../Utils/cardsData";
import "./Blogs.css";
import Header from "../Header";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import BlogDetails from "./subComponents/BlogDetails";
import arrow from "../../../../assets/Back arrow.svg";


const Card = ({ category, title, imageUrl, date, smallImage, name, handleClick }) => (
  <div className="card" onClick={(e) => handleClick(e)}>
    <img className="blog-img" src={imageUrl} alt={title} />
    <span className="blog-category">{category}</span>
    <h2 className="blog-title">{title}</h2>
    <div className="title-container">
      <span className="titleCont">
        <img src={smallImage} alt={title} />
        <h2 className="blog-name">{name}</h2>
      </span>
      <p className="titleCont2">{date}</p>
    </div>
  </div>
);

const Blogs = () => {
  const [description, setDescription] = useState(false);
  const [descriptionData, setDescriptionData] = useState(null)

  const [headerStyle, setHeaderStyle] = useState({});
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.pathname);

    if (params.get("headerStyle") === "dark") {
      // Set dark style
      setHeaderStyle({
        backgroundColor: "black",
        color: "white",
        backgroundImage: "none",
      });
    } else {
      setHeaderStyle({
        backgroundColor: "white", 
        color: "black",
        backgroundImage: "none",
      });
    }
  }, [location.pathname]);

  const toggleDescription = (e, briefCard) => {
    e.preventDefault()

    setDescriptionData(briefCard)
    setDescription(true)
  }

  return (
    <>
      <Header style={headerStyle} />
      {description && <div style={{ position: "relative", top: "100px", padding:"40px", }} onClick={(e) => setDescription(false)}>
      <div className="back-icon" >
          <img src={arrow} alt="Back" />
        </div>
      </div>}

      {!description ? (
        <div className="blog-container">
          <div>
            {" "}
            <h2 className="blog-main-heading">Blogs</h2>
          </div>
          <div className="container-homenew">
            <div className="blog-Home-container ">
              <div className="blog-section-1">
                {/* <h2 className="blog-heading">
                  Latest | E-commerce CRM | BFCM Strategies | How to Guides{" "}
                  <br />
                  E-commerce Technology | CX Strategies
                </h2> */}
              </div>
            </div>
          </div>
          <div className="card-row-blog">
            {cardsData.map((card) => (
              <div>
                <Card handleClick={(e) => toggleDescription(e, card.briefDescription)} key={card.id} {...card} />
              </div>
            ))}
          </div>
        </div>
      ) : (
         <BlogDetails descriptionData={descriptionData} />
      )}
      <Footer />
    </>
  );
};

export default Blogs;
