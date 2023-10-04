import React from 'react'
import Cards from '../Card/Card'
import './Feature.css'
import Typography from '@mui/material/Typography'
import { Button, Stack } from '@mui/material'
import emoji from '../Images/emoji-lap.png'
import EastIcon from '@mui/icons-material/East';

const Feature = () => {

  return (
    <>
    <div className='Feature'>
    <Typography variant="subtitle2" component='p' className='subtitle'>
     Explore
    </Typography>
    <Stack direction='row' sx={{marginBottom:'40px'}}>
          <Typography variant="h3" component='h3' className='h3'>
          Featured Top Courses 
          </Typography>
          <img src={emoji} className='emoji' alt='emoji' style={{paddingLeft:'10px'}} />
    </Stack>
 
    <Cards />
    <Button variant='contained' className='freelance-go' endIcon={<EastIcon />}>View All Courses</Button>
    </div> 
    </>
  )
}

export default Feature
