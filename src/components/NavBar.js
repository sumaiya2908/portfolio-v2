import { Box } from '@mui/material'
import React from 'react'

function NavBar() {
	const NavItems = ['Home', 'About', 'Projects', 'CodeBook', 'Resume'];
	return (
		<Box className="nav-container">
			{NavItems.map((Item, i) => {
				return (<Box className="nav-item" key={i}>
					{Item}
				</Box>)
			})}



		</Box>
	)
}

export default NavBar