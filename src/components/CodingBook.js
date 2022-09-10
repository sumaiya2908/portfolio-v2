import { Box, CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import config from '../config';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function CodingBook() {
	const [notes, setNotes] = useState([]);
	const[loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(
			'https://strapi-backend-portfoliov2.herokuapp.com/api/code-books',
			config
		)
			.then((response) => {setNotes(response.data.data); setLoading(false)})
			.catch((err) => console.log(err))
	}, [])

	return (
		<Box className='coding-book box gray-bg'>
			<NavBar />
			<Box className='box gray-bg layout-padding fullview-box notes-container'>
				{loading ?
				<CircularProgress className='loader'/> : null}
				{notes.map(({ attributes }, i) => {
					return (
						<Box className='note-container border-b border-secondary' key={i}>
							<Link to={'/codebook/' + attributes.title}>
								<Box className='note-title'>
									{attributes.title}
								</Box>
							</Link>
							<Box className='note-desc'>
								{attributes.description}
							</Box>
							<Box className='note-date'>
								{moment(attributes.createdAt).format('MMM Do YYYY')}
							</Box>
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default CodingBook