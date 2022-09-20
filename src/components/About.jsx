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
                            Hello there! I am Summayya. I am a self-taught fullstack developer. I completed my graduation in 2022.
                        </p>

                        <p>
                            I believe in learning by doing philosphy. So whatever tech I tend to learn, I make a project out of it. Check out some <Link className='colored-text' to="/projects">here.</Link>
                        </p>
                        <p>
                            When I am not coding or learning, I am probably watching some space documentory and indulging myself in existential crisis.
                        </p>

                    </div>
                    <Socials />
                </div>
            </div>
            
        </>
    )
}

export default About