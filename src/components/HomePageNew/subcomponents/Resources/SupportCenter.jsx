import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
// import supportIcon from "../../../../assets/supportIcon.svg";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SupportCenter.css";
import { SupportArray } from "../../Utils/support";

const SupportCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterTopics = (topic) => {
    return topic.title.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="supportCenter-container">
      <Header />
      <div className="supportCenter-content">
        <div className="support-center-box">
          <div className="supportCenter-text">
            Support Center
            <div className="search-bar">
              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </div>
        {SupportArray.filter(filterTopics).map((topic, index) => (
          <div key={index} className="supportCard">
            <div>
              <div className="support-title">
                <img src={topic.icon} alt="" />
                <div className="sup-title">{topic.title}</div>
              </div>
              {topic.accordions.map((item, subIndex) => (
                <Accordion
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "none",
                  }}
                  key={subIndex}
                >
                  <AccordionSummary
                    sx={{
                      boxShadow: "none",
                      backgroundColor: "none",
                    }}
                  >
                    <Typography variant="subtitle1">
                      <span><img src={item.iconDesc} alt="" /></span> <span>{item.query}</span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{item.solution}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SupportCenter;
