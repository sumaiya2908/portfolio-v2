import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
	const NavItems = ['Home', 'About', 'Projects', 'CodeBook', 'Resume'];
	return (
		<Box className='nav-container'>
			{NavItems.map((Item, i) => {
				return (<Box className='nav-item' key={i}>
					<Link to={`\/${Item.toLowerCase()}`}>{Item}</Link>
				</Box>)
			})}

		</Box>
	)
}

export default NavBar