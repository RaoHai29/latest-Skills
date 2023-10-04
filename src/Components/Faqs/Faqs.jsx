import React, { useState } from "react";
import "./Faqs.css";
import Typography from "@mui/material/Typography";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Faqs = () => {
  const [showbtn, setShowbtn] = useState(false);
  const [showbtn1, setShowbtn1] = useState(false);
  const [showbtn2, setShowbtn2] = useState(false);
  const [showbtn3, setShowbtn3] = useState(false);
  const [showbtn4, setShowbtn4] = useState(false);
  const [showbtn5, setShowbtn5] = useState(false);
  return (
    <>
      <div className="Faqs">
        <Typography
          variant="subtitle"
          component="p"
          color="#0077FF"
          className="cap-1"
        >
          FAQ
        </Typography>
        <Typography variant="h3" className="h6">
          Frequently Ask Questions{" "}
          <span style={{ color: "#0077FF" }}>FAQs</span>
        </Typography>
        <div className="faqs-select">
            <div className="left">
            <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn(!showbtn)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
             <b  style={{textTransform:'capitalize'}}> How to register on paidlance?</b>
            </AccordionSummary>
          </Accordion>
          {showbtn &&<div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>
          {/* {2nd option} */}
          <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn1(!showbtn1)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn1 ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
             <b style={{textTransform:'capitalize'}}> Is paidlance secure & reliable?</b>
            </AccordionSummary>
          </Accordion>
          {showbtn1 &&<div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>
     {/* {3rd option} */}
     <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn2(!showbtn2)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn2 ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
              <b style={{textTransform:'capitalize'}} >is paidlance a freelance marketplace?</b>
            </AccordionSummary>
          </Accordion>
          {showbtn2 &&<div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>

            </div>
            <div className="right">
            <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn3(!showbtn3)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn3 ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
              <b  style={{textTransform:'capitalize'}}>how to hire freelancers from paidlance?</b>
            </AccordionSummary>
          </Accordion>
          {showbtn3 &&<div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>
          {/* {2nd option} */}
          <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn4(!showbtn4)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn4 ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
              <b style={{textTransform:'capitalize'}}> Is paidlance secure & reliable?</b>
            </AccordionSummary>
          </Accordion>
          {showbtn4 && <div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>
     {/* {3rd option} */}
     <div className="accordian">
          <Accordion>
            <AccordionSummary onClick={() => setShowbtn5(!showbtn5)}>
              <span style={{ paddingRight: "15px" }}>
                {showbtn5 ? <RemoveIcon sx={{color:'#0077FF'}} /> : <AddIcon />}
              </span>
              <b  style={{textTransform:'capitalize'}}>how to hire freelancers from paidlance?</b>            </AccordionSummary>
          </Accordion>
          {showbtn5 &&<div style={{marginTop:"15px", border:'2px solid #0077FF',borderRadius:'10px',background:'white'}}>
           <AccordionDetails>
              Ut molestie consectetur at urna et imperdiet volutpat imperdiet
              ac. Metus nisi turpis sed vitae. Sit eget tempus luctus enim
              consectetur netus integer aenean. Lorem pulvinar rutrum lacus
              tristique urna turpis malesuada.
            </AccordionDetails>
           </div>}
        </div>

            </div>
        </div>




      </div>
    </>
  );
};

export default Faqs;
