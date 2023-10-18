import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqs from './faqsData';

const Faqs = () => {
  return (
    <div style={{backgroundColor:"teal"}}>
    <div style={{width:"70%",margin:"2rem auto", padding:"4rem 3rem"}}>
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
