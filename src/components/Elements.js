import { Box } from '@mui/material'
import React from 'react'
import About from './About'
import Projects from './Projects'

function Elements() {
  return (
    <Box
    position='relative'>
    <About/>
    <Projects/>
    </Box>
  )
}

export default Elements