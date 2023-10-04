import React from "react";
import "./Getready.css";
import mapofworld from "../Images/worldmap.png";
import { Avatar, Button, Stack } from "@mui/material";
import qasim from '../Images/qasim hussain.jpg'
import rao from '../Images/Rao.jpg'
import ahsan from '../Images/Ahsan.jpg'

const Getready = () => {
  return (
    <>
      <div className="Getready">
        <div className="map-text">
          <img src={mapofworld} alt="world-map" className="mapworld" />
          <div className="text-1">
          <Avatar className="qasim" alt="qasim" src={qasim} />
          <Avatar className="qasim-1" alt="ahsan" src={ahsan} />
          <Avatar className="qasim-2" alt="Rao" src={rao} />
          <Avatar className="qasim-3" alt="ahsan" src={ahsan} />
          <Avatar className="qasim-4" alt="qasim" src={qasim} />
          <Stack component='h1' varient='h1' className="h1">
          are you ready? get started with <br />
            paidlance today!
          </Stack>
          <Stack direction='row' spacing={2} sx={{marginLeft:'650px'}} className="btns-ops">
            <Button variant="outlined" sx={{textTransform:'capitalize',color:'black',fontWeight:'500',background:'#F9F9F9',padding:'12px 30px',border:'1px solid #F9F9F9',boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}} className="btn-m">Sign In</Button>
            <Button variant="contained" sx={{textTransform:'capitalize',color:'white',fontWeight:'500',background:'#0077FF',padding:'12px 30px'}} className="btn-m">Sign Up</Button>

          </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getready;
