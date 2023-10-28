import React from 'react';
import "./faqs.css"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqs from './faqsData';

const Faqs = () => {
  return (
    <div className="body">
      <h1 className="heading">FAQS</h1>
    <div style={{width:"70%",margin:"auto 2rem auto 10rem", padding:"2rem 2rem"}}>
        {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
        ))}
    </div>
    </div>
  );
};

export default Faqs;
