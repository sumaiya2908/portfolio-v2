import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';
import Socials from './Socials';

function About() {
    return (
        <>
            <NavBar />

            <div className='container'>
                <div className='about-container'>
                    <div className='heading colored-text large-text typing'>About Me.</div>
                    <div className='about-body'>
                        <p >
                            I am a self-taught Fullstack developer. I graduated in
                            2022 with almost one year of full-time software developer experience.
                        </p>
                        <p>
                            I practice the MERN stack and I have built side projects to
                            plunge into technology. I usually enjoy learning both backend
                            and frontend technologies, but I tend to be more inclined to
                            the UI/UX aspect of the project. In the last job, I learned
                            the skill of attention to detail and now practice it when
                            developing user interfaces.
                        </p>
                        <p>
                            I believe in learning by doing philosophy, so
                            <Link className='colored-text' to="/projects"> here </Link>
                            are some of the projects I have built while exploring
                            different technologies. These technologies include React,
                            Python, GraphQL, Vite, etc.
                        </p>
                        <p>
                            When I am not coding, I usually watch space documentaries and philosophy.
                            These things always remind me how minute I am comparable to this vast
                            universe and give me a kick of existential crisis. Nowadays I am reading
                            `The God Delusional` by Richard Dawkins.
                        </p>

                    </div>
                    <Socials />
                </div>
            </div>

        </>
    )
}

export default About