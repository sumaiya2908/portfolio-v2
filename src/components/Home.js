import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineDribbble } from 'react-icons/ai'
import NavBar from './NavBar'

function Home() {
  return (
    <Box className='box gray-bg large-text justify-center fullview-box'>
    <NavBar/>
      <Box className="left-animate">Hello, I'm <span className='colored-text cursive'>Summayya</span>.</Box>
      <Box className="right-animate">A <span className='colored-text'>Software Developer</span> based in India.</Box>
      <Box marginTop={3.5}>
        <AiOutlineGithub className='icon social-icon small-icon'/>
        <AiOutlineLinkedin className='icon social-icon small-icon'/>
        <AiOutlineDribbble className='icon social-icon'/>
        <AiOutlineInstagram className='icon'/>
      </Box>
    </Box>
  )
}

export default Home