import React from 'react'
import { Typography, Box } from '@mui/material'
import './index.css'

const Home = () => {
  return (
    <div className='body-section'>
    <div className='d-flex mt-5'>
        <div className='row'>
            <Box className="d-flex"><Typography variant='h4'>Notifications</Typography><div className='inbox-badge'>30</div></Box>
            <Box className="d-flex"><Typography variant='h4'>Messages</Typography><div className='inbox-badge'>30</div></Box>
        </div>
        <div className='flex-grow-1'>
          <p>sdfghjk</p>
        </div>
    </div>
    </div>
  )
}

export default Home