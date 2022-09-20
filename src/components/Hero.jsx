import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import Socials from './Socials'

function Hero({ setChange }) {

	return (
		<div className='fullview-container bg-gray'>
			<div className=' flex-container flex-column hero-container'>
				<div className='large-text'>Hello, I'm <div className='colored-text slow-display'>&#60;/Summayya&#62;</div>.</div>
				<div className='large-text'>A <span className='colored-text'>Software Developer</span> based in India.</div>
				<div className='hero-about'>
					<Socials />
					<span className='hero-about-text' onClick={() => setChange(true)}>See More About Me <BsArrowRight className='arrow' /></span>
				</div>
			</div>
		</div>
	)
}

export default Hero