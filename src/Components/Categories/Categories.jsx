import React ,{useState}from "react";
import Typography from "@mui/material/Typography";
import "./Categories.css";
import { Stack } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Women from '../Images/women-laptop.jpg'
import chartpic from '../Images/chart.png'
import wavyimg from '../Images/wavy.png'

const Categories = () => {
  const [show,setShow] = useState(true)
  const [showing,setShowing] = useState(false)
  const [show3,setShow3] = useState(false)
  return (
    <>
      <div className="Categories">
        <div className="Cate-Accord">
          <div className="left">
            <Typography
              variant="caption"
              component="p"
              sx={{
                fontSize: "15px",
                textTransform: "uppercase",
                fontWeight: "550",
                letterSpacing: "1.5px",
                color: "#0077FF",
              }}
              className="p-1"
            >
              Categories
            </Typography>
            <Typography variant="h3" className="h3">
              How to <span style={{color:'#0077FF'}}>Register</span><br /> yourself on LearningSkills?
            </Typography>
            <Stack direction='row' spacing={2} sx={{border:'1px solid transparent',borderRadius:'10px',boxShadow:' rgba(0, 0, 0, 0.07) 0px 3px 10px;', width:"75%", marginTop:"15px",paddingLeft:'10px',paddingBottom:'15px'}} onClick={()=> setShow(!show)} className="option-down" >
              <Typography variant="caption" component='div' className="Numbers">
                  01.
              </Typography>
              <Stack direction='column' className="ac-text">
              <Typography variant="h6" className="h6" >
                 Free to Join
                </Typography>
                <Typography variant="subtite2" component='p' className="p">
                    {show && `It is totally free to join paidlance`}<br />
                    {show && `and registered`}
                </Typography>
              </Stack>
              <Typography variant="button"className="button">
                  {show ? <KeyboardArrowUpIcon sx={{fontSize:'30px',padding:'5px',borderRadius:'50%', color:'white',background:'#0077FF',marginRight:'20px'}} /> : <KeyboardArrowDownIcon sx={{fontSize:'30px',padding:'5px',marginRight:'20px',background:'#F9F9F9',borderRadius:'50%'}} />}
               </Typography>
            </Stack>
            {/* {2nd option} */}
            <Stack direction='row' spacing={2} sx={{border:'1px solid transparent',borderRadius:'10px',boxShadow:' rgba(0, 0, 0, 0.07) 0px 3px 10px;', width:"75%", marginTop:"15px",paddingLeft:'10px',paddingBottom:'15px'}} onClick={()=> setShowing(!showing)} className="option-down" >
              <Typography variant="caption" component='div' className="Numbers">
                  02.
              </Typography>
              <Stack direction='column' className="ac-text">
              <Typography variant="h6" className="h6" >
                 Secure Account
                </Typography>
                <Typography variant="subtite2" component='p' className="p">
                    {showing && `It is totally free to join paidlance`}<br />
                    {showing && `and registered`}
                </Typography>
              </Stack>
              <Typography variant="button"className="button">
                  {showing ? <KeyboardArrowUpIcon sx={{fontSize:'30px',padding:'5px',borderRadius:'50%', color:'white',background:'#0077FF',marginRight:'20px'}} /> : <KeyboardArrowDownIcon sx={{fontSize:'30px',padding:'5px',marginRight:'20px',background:'#F9F9F9',borderRadius:'50%'}} />}
               </Typography>
            </Stack>
             {/* {3rd option} */}
             <Stack direction='row' spacing={2} sx={{border:'1px solid transparent',borderRadius:'10px',boxShadow:' rgba(0, 0, 0, 0.07) 0px 3px 10px;', width:"75%", marginTop:"15px",paddingLeft:'10px',paddingBottom:'15px'}} onClick={()=> setShow3(!show3)} className="option-down">
              <Typography variant="caption" component='div' className="Numbers">
                  03.
              </Typography>
              <Stack direction='column' className="ac-text">
              <Typography variant="h6" className="h6" >
                  Verified Profile
                </Typography>
                <Typography variant="subtite2" component='p' className="p">
                    {show3 && `It is totally free to join paidlance`}<br />
                    {show3 && `and registered`}
                </Typography>
              </Stack>
              <Typography variant="button"className="button">
                  {show3 ? <KeyboardArrowUpIcon sx={{fontSize:'30px',padding:'5px',borderRadius:'50%', color:'white',background:'#0077FF',marginRight:'20px'}} /> : <KeyboardArrowDownIcon sx={{fontSize:'30px',padding:'5px',marginRight:'20px',background:'#F9F9F9',borderRadius:'50%'}} />}
               </Typography>
            </Stack>
          </div>
          <div className="right">
              <img className="women" src={Women} alt="Women with Laptop" />
              <img className="chart" src={chartpic} alt="chart" /> 
              <img className="wavy" src={wavyimg} alt="wave" /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
