import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import config from '../config';
import ReactMarkdown from 'react-markdown';
import NavBar from './NavBar';

function CodingBookTitle() {
	const { title } = useParams();
	const [note, setNote] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get(
			`https://strapi-backend-portfoliov2.herokuapp.com/api/code-books?filters[title][$eq]=${title}`,
			config
		)
			.then((response) => { setNote(response.data.data[0].attributes); setLoading(false) })
			.catch((err) => console.log(err))

	}, [])
	return (
		<div className='box gray-bg'>
			<NavBar />
			<div className='box bg-gray fullview-box layout-padding notes-container'>
				<div className='note-heading mt-8'>{note.title}</div>
				<ReactMarkdown className='note-text'
				>{note ? note.notes : null}
				</ReactMarkdown>
			</div>

		</div>

	)
}

export default CodingBookTitle