import React from 'react'

import Typography from '@mui/material/Typography'
import Cards from '../Card/Card'
import './Courses.css'
const Courses = () => {
  return (
    <>
    <div className='Courses'>  
    <Typography variant="h2" sx={{color:'blue' ,fontWeight:'600',textAlign:'center',marginBottom:'30px'}}>Our Top Rated Courses</Typography>
    <Cards />
    </div>
   
    </>
  )
}

export default Courses