import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
	const NavItems = ['Home', 'About', 'Projects', 'CodeBook', 'Resume'];
	return (
		<div className='nav-container'>
			{NavItems.map((Item, i) => {
				return (<div className='nav-item' key={i}>
					<Link to={`\/${Item.toLowerCase()}`}>{Item}</Link>
				</div>)
			})}

		</div>
	)
}

export default NavBar