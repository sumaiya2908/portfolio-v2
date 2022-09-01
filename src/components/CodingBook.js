import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import config from '../config';

function CodingBook() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		axios.get( 
			'https://strapi-backend-portfoliov2.herokuapp.com/api/code-books',
			config
		)
		.then((response) => setNotes(response.data.data))
		.catch((err) => console.log(err))

	}, [])

	return (
		<Box className='box gray-bg layout-padding fullview-box notes-container'>
		{notes.map(({attributes}, i) => {
			return(
				<Box className='note-container border-b border-secondary' key={i}>
					<Box className='note-title'>
					{attributes.title}
					</Box>
					<Box className='note-desc'>
					{attributes.description}
					</Box>
					<Box className='note-date'>
					{moment(attributes.createdAt).format("MMM Do YYYY")}
					</Box>
				</Box>
			)
		})}
			
		</Box>
	)
}

export default CodingBook