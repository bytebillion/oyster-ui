// PopupComponent.js
import React, { useRef, useEffect, useState } from "react";
import "./PromptsPopup.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import close from "../../assets/close-icon.png";

function PromptsPopup({ onClose, setInputText }) {
  const accordionData = [
    {
      question: "Article Generator",
      answer:
        "include relevant statistics (add the links of the sources you use) and consider diverse perspectives. Write it in a [X tone] and mention the source links in the end",
    },
    {
      question: "Backlink Outreach Email",
      answer:
        "(add the links of the sources you use) and consider diverse perspectives. Write it in a [X tone] and mention the source links in the end",
    },
    {
      question: "Article Generator",
      answer:
        "relevant statistics and consider diverse perspectives. Write it in a [X tone] and mention the source links in the end",
    },
    {
      question: "Backlink Outreach Email",
      answer:
        "statistics (add the links of the sources you use) and consider diverse perspectives. Write it in a [X tone] and mention the source links in the end",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedAccordian, setSelectedAccordian] = useState(0);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleListItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
    setSelectedAccordian(accordionData[index])
  };
  
  const redirectPrompt = (e) => {
    e.preventDefault()
    setInputText(selectedAccordian.answer)
    onClose();
    
  }

  return (
    <div className="popup-overlay" ref={popupRef}>
      <div className="popup-container" >
        <button className="close-button" onClick={onClose}>
          <img className="close-img" src={close} alt="" />
        </button>
        <div className="popup-content">
          <div className="content-container">
            <div className="list-container">
              <ul>
                {accordionData.map((data, index) => (
                  <li
                    key={index}
                    onClick={() => handleListItemClick(index)}
                    className={selectedItem === index ? "selected" : ""}
                  >
                    {data.question}
                  </li>
                ))}
              </ul>
            </div>
            <div className="des-container">
                <div className="prompts-text">
              {selectedItem !== null && (
                <Accordion className="desc-accordian">
                  <AccordionDetails>
                    <Typography>
                      {accordionData[selectedItem].answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}
              
            </div>
            <div className="use-prompt"> <button className="use-prompt-btn" onClick={(e) => redirectPrompt(e)}>Use Prompts</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromptsPopup;
