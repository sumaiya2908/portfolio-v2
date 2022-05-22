import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React, {useEffect} from 'react'
import { AiOutlineGithub, AioutlineE } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import axios from 'axios'
function Projects() {
    useEffect(() => {
        window.process = {
          ...window.process,
        };
      }, []);
    const instance = axios.create({
        baseURL: 'http://localhost:1337/api/projects',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+ window.process.env.REACT_APP_STRAPI_TOKEN}
      });
      
      instance.get('/path')
      .then(response => {
          console.log(response)
      })

    return (
        <Box className='box gray-bg layout-padding'>

            <Box className='border-bottom large-text'>
                Projects
            </Box>
            <Box className='project-container layout-padding'>
                <Card variant="outlined" className='card'>
                    <CardHeader title="Project 1" />
                    <CardContent>
                        Adipi  sicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur.
                    </CardContent>
                    <CardActions>
                        <AiOutlineGithub className='icon' />
                        <FiExternalLink className='icon' />
                    </CardActions>
                </Card>
            </Box>
        </Box>

    )
}

export default Projects