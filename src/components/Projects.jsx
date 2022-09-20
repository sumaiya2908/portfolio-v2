import React, { useState, useEffect } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import axios from 'axios'

import config from '../config';
import NavBar from './NavBar';
import Loader from './Loader';

function Projects() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(
            'https://strapi-backend-portfoliov2.herokuapp.com/api/projects',
            config
        )
            .then((response) => { setProjects(response.data.data); setLoading(false) })
            .catch(console.log);
    }, [])

    return (
        <>
            <NavBar />

            <div className='container'>
                <div className='heading colored-text large-text typing'>
                    Projects.
                </div>
                {loading ? <Loader /> : null}
                <div className='project-container layout-padding'>
                    {projects.map(({ attributes }, i) => {
                        return (
                            <div className='project-container' key={i}>
                                <div className='project-card'>

                                    <div className='project-title'>
                                        {attributes.title}
                                    </div>

                                    <div className='project-desc h-element'>
                                        {attributes.description}
                                    </div>

                                    <div className='project-stack h-element'>
                                        {attributes.stack}
                                    </div>

                                    <div className='project-links'>
                                        <a target='_blank' href={attributes.github} ><AiOutlineGithub /></a>
                                        <a target='_blank' href={attributes.web}><FiExternalLink /></a>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Projects