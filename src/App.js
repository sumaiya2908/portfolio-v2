import { Box, Container } from '@mui/material';
import React from 'react';
import About from './components/About';
import Elements from './components/Elements';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <Box>
      <Home />
      <Elements/>
    </Box>
  )
}

export default App