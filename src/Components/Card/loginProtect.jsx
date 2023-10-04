import React from "react";

import { Button } from "@mui/material";
const Login = () => {

  function HandleClick(){
    localStorage.setItem("isLogged" ,true)
    window.location.href= "/admin"
  }
  return <Button onClick={()=> HandleClick()}  className='btn-1' sx={{border:'1.5px solid black',height:'18px',padding:'20px 25px',color:'black',textTransform:'capitalize',fontWeight:'600',background:'#black'}} >Admin</Button>;
};

export default Login;