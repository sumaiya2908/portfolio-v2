import React from 'react'
import { Link } from 'react-router-dom';
import document from '../../public/Document/resume.pdf'

function NavBar() {

	const NavItems = ['Home', 'About', 'Projects', 'Resume'];

	return (
		<div className='nav-container'>

			{NavItems.map((Item, i) => {
				if (Item == 'Resume') {
					return (
						<div className='nav-item' key={i}>
							<Link target='_blank' to={document}>{Item}</Link>
						</div>
					)
				}

				return (
					<div className='nav-item' key={i}>
						<Link to={`\/${Item.toLowerCase()}`}>{Item}</Link>
					</div>)
			})}

		</div>
	)
}

export default NavBar