import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack } from "@mui/material";
import './Footer.css'
export default function Footer() {

  return (
    <Box
      component="footer"
      sx={{
       background:'black',
       color:'white',
       paddingTop:'150px !important',
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container  spacing={{ xs: 7, md: 10 }} columns={{ xs: 7, sm: 9, md: 12 }}>
          <Grid item xs={12} sm={3} >
            <Typography variant="h6" color="white" gutterBottom sx={{fontSize:'42px',marginTop:"-28px",fontWeight:'700'}} className="head-1">
              paid<span style={{color:'#0077FF'}}>lance</span>.
            </Typography>
            <Typography variant="body2" color="white">
              My Name is Rao Abdul Hai and frontend Developer this project is given by PHP travel
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom sx={{fontSize:'22px',marginTop:"-12px",fontWeight:'700'}}>
              User Account
            </Typography>
            <Typography variant="body2" color="white">
              Account login
            </Typography>
            <Typography variant="body2" color="white">
              Account Signup
            </Typography>
            <Typography variant="body2" color="white">
              Recover Password
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="white" gutterBottom sx={{fontSize:'22px',marginTop:"-12px",fontWeight:'700'}}>
              Terms & Policy
            </Typography>
            <Typography variant="body2" color="white">
              Terms & Conditions
            </Typography>
            <Typography variant="body2" color="white">
               Privacy Policy
            </Typography>
            <Typography variant="body2" color="white">
                Agreement
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} id='ourletter'>
            <Typography variant="h6" color="white" gutterBottom sx={{fontSize:'22px',marginTop:"-12px",fontWeight:'700'}}>
              Our NewsLetter
            </Typography>
            <Stack direction='row' id='email-1'>
                <input type="email" name="email" id="email" value='Enter your Email' style={{height:'30px', padding:'5px 10px', fontSize:'15px', borderRadius:'10px',borderEndEndRadius:'0',borderTopRightRadius:'0', border:'1px solid transparent'}} className="email-btn" />
                <Button variant="contained" sx={{padding:'8px 50px',borderRadius:'10px',borderTopLeftRadius:'0',borderEndStartRadius:'0',background:'#0077FF',textTransform:'capitalize', fontSize:'14.5px'}} className="email-btn">Submit</Button>
            </Stack>
          </Grid>
        </Grid>
        <hr style={{width:'105%',marginTop:'10px'}} />
        <Stack direction={{xs: "column", md: "row"}} spacing={{xs: 3, md:10}} mt={5} sx={{justifyContent:'space-around'}}>
          <Stack variant="body2" color="white" direction='row' spacing={2}  >
                 <Facebook />
                 <Instagram />
                 <Twitter />
          </Stack>
          <Typography variant="body2" color="white" align="center">
                Copyright 2023 PaidLance.com © All Rights Reserved
          </Typography>
          <Stack variant="body2" color="white" direction='row' spacing={1} >
                <Typography component='p'>Privacy & Polcy -</Typography>
                <Typography component='p'>Terms & Conditions</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}