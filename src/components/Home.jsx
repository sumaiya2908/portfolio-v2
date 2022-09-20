import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'

import Hero from './Hero'
import About from './About'

function Home() {
  return (
    <div className=''>
      <div className=''>Hello, I'm <span className='colored-text'>&#60;Sumaiya/&#62;</span>.</div>
      <div className=''>A <span className='colored-text'>Software Developer</span> based in India.</div>
      <div>
        <a href='https://github.com/sumaiya2908' target='_blank'><AiOutlineGithub className='icon social-icon small-icon' /></a>
        <a href='https://www.linkedin.com/in/summayyahasmani/' target='_blank'><AiOutlineLinkedin className='icon social-icon small-icon'/></a>
        <a href='https://sumaiya.hashnode.dev/' target='_blank'><SiHashnode className='icon social-icon small-icon'/></a>
      </div>
    </div>
  )
}

export default Home