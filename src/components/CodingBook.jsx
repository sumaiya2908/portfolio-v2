import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import config from '../config';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function CodingBook() {
	const [notes, setNotes] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(
			'https://strapi-backend-portfoliov2.herokuapp.com/api/code-books',
			config
		)
			.then((response) => { setNotes(response.data.data); setLoading(false) })
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className='coding-book box gray-bg'>
			<NavBar />
			<div className='box gray-bg layout-padding fullview-box notes-container'>
				{loading ?
					<div></div>:null}
				{notes.map(({ attributes }, i) => {
					return (
						<div className='note-container border-b border-secondary' key={i}>
							<Link to={'/codebook/' + attributes.title}>
								<div className='note-title'>
									{attributes.title}
								</div>
							</Link>
							<div className='note-desc'>
								{attributes.description}
							</div>
							<div className='note-date'>
								{moment(attributes.createdAt).format('MMM Do YYYY')}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CodingBook