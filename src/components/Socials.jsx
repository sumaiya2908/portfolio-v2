import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { SiHashnode } from 'react-icons/si'

function Socials() {
	return (

		<div className='socials'>
			<a href='https://www.linkedin.com/in/summayyahasmani/' target='_blank'><AiOutlineLinkedin className='icon social-icon small-icon ' /></a>
			<a href='https://github.com/sumaiya2908' target='_blank'><AiOutlineGithub className='icon social-icon small-icon' /></a>
			<a href='mailto:sumaiyahas2908@gmail.com' target='_blank'><AiOutlineMail className='icon social-icon small-icon' /></a>
			<a href='https://sumaiya.hashnode.dev/' target='_blank'><SiHashnode className='icon social-icon pb-1' /></a>
		</div>
	)
}

export default Socials