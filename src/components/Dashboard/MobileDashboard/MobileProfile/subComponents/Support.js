import React, { useState }  from "react";
import "./support.css";
import arrow from "../../../../../assets/Back arrow.svg";
import chatIcon from "../../../../../assets/chat box.svg";
import customer from "../../../../../assets/headphones.svg";
import website from "../../../../../assets/Website.svg";
import whatsapp from "../../../../../assets/whatsapp.svg";
import facebook from "../../../../../assets/facebook.svg";
import twitter from "../../../../../assets/twitter.svg";
import instagram from "../../../../../assets/instagram.svg";
import searchIcon from "../../../../../assets/search-icon.svg";
import filterIcon from "../../../../../assets/filter-icon.svg";
import ArrowDownIcon from "../../../../../assets/ArrowDown2.svg";


import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

const tabStyle = {
  backgroundColor: "#f5f5f5",
  border: "1px solid #ddd",
  borderRadius: "25px",
  overflow: "hidden",
  minWidth: "auto",
  padding: "10px 16px",
  textTransform: "none",
  color: "#333",
  fontWeight: "bold",
  margin: "4px",
};

const activeTabStyle = {
  ...tabStyle,
  color: "white",
  backgroundColor: "#3b82f6", // Change this to your desired active color
  borderBottom: "none",
};

const inactiveTabStyle = {
  ...tabStyle,
  color: "#3b82f6",
  backgroundColor: "white",
  borderBottom: "none",
};

function SupportPro({ setShowSupport }) {
  const [value, setValue] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState("panel1a");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpandedAccordion(isExpanded ? panel : null);
  };
  return (
    <div className="w-full">
      <div className="mobile-support-container">
        <div className="box-a">
          <div
            className="back-icon d-flex"
            onClick={() => setShowSupport(false)}
          >
            <img className="support-back-icon" src={arrow} alt="Back" />
            <h3>Support</h3>
          </div>
          <div>
            {" "}
            <img src={chatIcon} alt="" />
          </div>
        </div>

        <div className="w-full box-b">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              className="w-full"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab className="tab" label="FAQ" />
              <Tab className="tab" label="Contact Us" />
            </Tabs>
          </Box>

          <div className="tab-container">
            <div className={`tab-panel ${value === 0 ? "active" : ""}`}>
              <div>
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className="tab-1"
                  textColor="black"
                  TabIndicatorProps={{
                    style: { display: "none" },
                  }}
                >
                  <Tab
                    label="General"
                    className="tab-1-1"
                    sx={
                      activeTab === 0
                        ? {
                            ...activeTabStyle,
                            color: "white",
                            borderTopLeftRadius: "25px",
                            borderBottomLeftRadius: "25px",
                          }
                        : inactiveTabStyle
                    }
                  />
                  <Tab
                    label="Account"
                    className="tab-1-1"
                    sx={activeTab === 1 ? activeTabStyle : inactiveTabStyle}
                  />
                  <Tab
                    label="Service"
                    className="tab-1-1"
                    sx={activeTab === 2 ? activeTabStyle : inactiveTabStyle}
                  />
                  <Tab
                    label="Video"
                    className="tab-1-1"
                    sx={activeTab === 3 ? activeTabStyle : inactiveTabStyle}
                  />
                </Tabs>
              </div>
              <div className="search-bar d-flex mt-[30px] justify-content-between align-items-center items-center">
                <div className=" search-box d-flex w-[100%] rounded-lg items-center ">
                  <img src={searchIcon} alt="Search" />
                  <textarea
                    className=" Search-text-area w-[100%] p-1 px-3 resize-none outline-none text-[#6E6E70] rounded-lg items-center"
                    rows="1"
                    cols="40"
                    placeholder="Search"
                  />
                  <img src={filterIcon} alt="Search" />
                </div>
              </div>
              <div><Accordion
        className="accord"
        expanded={expandedAccordion === "panel1a"}
        onChange={handleAccordionChange("panel1a")}
      >
        <AccordionSummary
          expandIcon={<img src={ArrowDownIcon} alt="Expand" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typo">What is Oyster?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accord"
        expanded={expandedAccordion === "panel2a"}
        onChange={handleAccordionChange("panel2a")}
      >
        <AccordionSummary
          expandIcon={<img src={ArrowDownIcon} alt="Expand" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="typo">What is Oyster?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accord"
        expanded={expandedAccordion === "panel3a"}
        onChange={handleAccordionChange("panel3a")}
      >
        <AccordionSummary
          expandIcon={<img src={ArrowDownIcon} alt="Expand" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className="typo">What is Oyster?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accord"
        expanded={expandedAccordion === "panel4a"}
        onChange={handleAccordionChange("panel4a")}
      >
        <AccordionSummary
        className="larger"
        expandIcon={<img src={ArrowDownIcon} alt="Expand" />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className="typo">What is Oyster?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo-summary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion></div>
            </div>
            <div className={`tab-panel ${value === 1 ? "active" : ""}`}>
              <div className="contacts">
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={customer} alt="icon" />
                    <div>
                      {" "}
                      <p>Customer Service</p>
                    </div>
                  </div>
                </div>
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={whatsapp} alt="icon" />
                    <div>
                      {" "}
                      <p>WhatsApp</p>
                    </div>
                  </div>
                </div>
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={website} alt="icon" />
                    <div>
                      {" "}
                      <p>Website</p>
                    </div>
                  </div>
                </div>
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={facebook} alt="icon" />
                    <div>
                      {" "}
                      <p>Facebook</p>
                    </div>
                  </div>
                </div>
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={twitter} alt="icon" />
                    <div>
                      {" "}
                      <p>Twitter</p>
                    </div>
                  </div>
                </div>
                <div className="Subbox ">
                  <div className="box-button">
                    <img src={instagram} alt="icon" />
                    <div>
                      {" "}
                      <p>Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPro;
