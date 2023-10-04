import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
      <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='btn-2' sx={{border:'1.5px solid #0077FF',height:'18px',padding:'20px 25px',color:'white',textTransform:'capitalize',fontWeight:'600',background:'#0077FF'}} >Log out</Button>

  );
};

export default LogoutButton;