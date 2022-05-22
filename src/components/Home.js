import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai'

function Home() {
  return (
    <Box className='box gray-bg large-text justify-center fullview-box'>
      <Box>Hello, I'm <span className='colored-text cursive'>Summayya</span>.</Box>
      <Box>A <span className='colored-text'>Software Developer</span> based in India.</Box>
      <Box marginTop={3.5}>
        <AiOutlineGithub className='icon social-icon'/>
        <AiOutlineLinkedin className='icon social-icon'/>
        <AiOutlineInstagram className='icon social-icon'/>
        <AiOutlineDribbble className='icon'/>
      </Box>
    </Box>
  )
}

export default Home