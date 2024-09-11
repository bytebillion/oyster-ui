// AccordionComponent.js
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {accordionData} from "../Utils/accordianData";
import "../subcomponents/FAQ.css";

const FAQ = () => {
  const [expanded, setExpanded] = useState(`panel0`); 
  // eslint-disable-next-line no-undef
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
    <div className="FAQ-section">
    <h2 className="heading-FAQ">FAQ's</h2>
  </div>
    <div className='FAQ-container'>
      
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          className='Acc'
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          classes={{ root: 'accordian-contain' }}
          
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography fontSize={ isMobile ? 20 :25} textAlign={"left"} fontWeight={600}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography fontSize={isMobile ? 17 : 22} textAlign={"left"}>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
    </>
  );
};

export default FAQ;
