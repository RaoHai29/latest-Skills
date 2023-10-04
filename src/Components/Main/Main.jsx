import React from 'react'
import './Main.css'
import { Button, Stack, Typography } from '@mui/material'
import mainimg from '../Images/main-pic.png'
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { useAuth0 } from "@auth0/auth0-react";
const Main = () => {
    const jobs=['Web Developer','UX Designer','Video Editor']
    const { user, isAuthenticated } = useAuth0();
  return (
   <>
    <main>
     <div className='main-text'>
        {isAuthenticated ? <Typography variant='h6' sx={{fontWeight:500,color:'blue'}}>Hi! {user.name}</Typography> : ""}
        <Typography variant='h2' className='h2'>
        Get Learn IT Skills<br />
        <span style={{color:'#0077FF'}}>Top Rated</span> Courses!
        </Typography>
        <Stack className='search-bar' direction='row'>
            <SearchIcon sx={{fontSize:'33px',padding:'10px',borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px',paddingRight:'20px'}} className='icon' />
            <input className='searching' type='search' value='Try "PHP Developer"' name='search-any' id='search-any' />
            <Button className='btn-search'>Search</Button>
        </Stack>
        <Stack direction='row' spacing={2}>
            {jobs.map((job)=>(
                <Typography className='jobs' key={job}>{job}</Typography>
            ))}
        </Stack>
        <Stack direction='row' spacing={2} sx={{marginTop:'10px'}}>
            <Stack direction='row' spacing={1}>
                <CheckCircleIcon /><Typography variant='subtitle'  sx={{fontWeight:600}}>
                Quality work done, quickly 
                </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
                <CheckCircleIcon /><Typography variant='subtitle'  sx={{fontWeight:600}}>
                Best for every budget
                </Typography>
            </Stack>
        </Stack>
        <Stack className='p-btn' direction='row' sx={{marginTop:'60px'}}>
                <LocalParkingIcon sx={{fontSize:'30px',padding:'5px',color:'white',background:'red',borderRadius:'50%'}} />
                <Stack direction='column' sx={{paddingLeft:'15px'}}>
                    <Typography variant="subtitle1" component='p' sx={{fontSize:'7px',fontWeight:'550',color:'red',paddingTop:'5px'}}>
                        FEATURED ON
                    </Typography>
                    <Typography variant="subtitle1" component='p' sx={{fontSize:'17px',fontWeight:'550',color:'red',marginTop:'-5px'}}>
                      Product Hunt
                    </Typography>
                </Stack>
                <Stack direction='column' sx={{paddingLeft:'15px'}}>
                    <ArrowDropUpIcon sx={{color:'red'}} />
                    <Typography variant="subtitle1" component='p' sx={{color:'red',fontSize:'12.5px',fontWeight:'550',marginTop:'-6px'}} >
                        172
                    </Typography>
                </Stack>
        </Stack> 
     </div>
     <div className='main-right'>
        <img  className='mainimg' src={mainimg} alt='main-img'/>
     </div>
    </main>
   </>
  )
}

export default Main
