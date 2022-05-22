import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
        <AppBar position='sticky' top='0px' transfo='translateX(-50%)'
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
  )
}

export default NavBar