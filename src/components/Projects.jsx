import React, { useState, useEffect } from 'react'
import { AiOutlineGithub, AioutlineE } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import axios from 'axios'

import config from '../config';
function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get(
            'https://strapi-backend-portfoliov2.herokuapp.com/api/projects',
            config
        )
            .then((response) => setProjects(response.data.data))
            .catch(console.log);
    }, [])

    return (
        <div className='box grey-bg layout-padding'>

            <div className='border-bottom large-text'>
                Projects
            </div>
            <div className='project-container layout-padding'>
                {projects.map(({ attributes }, i) => {
                    return (<Card variant='outlined' className='card' key={i}>
                        <CardHeader title={attributes.title} />
                        <CardContent>
                            {attributes.description}
                        </CardContent>
                        <CardActions>
                            {attributes.github ? <a href={attributes.github} target='_blank'><AiOutlineGithub className='icon' /></a> : null}
                            {attributes.web ? <a href={attributes.web} target='_blank'><FiExternalLink className='icon' /></a> : null}
                        </CardActions>
                    </Card>)
                })}

            </div>
        </div>
    )
}

export default Projects