import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import config from '../config';
import { Box, CircularProgress } from '@mui/material';
import ReactMarkdown from 'react-markdown';

function CodingBookTitle() {
  const { title } = useParams();
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(
      `https://strapi-backend-portfoliov2.herokuapp.com/api/code-books?filters[title][$eq]=${title}`,
      config
    )
      .then((response) => { setNote(response.data.data[0]); setLoading(false) })
      .catch((err) => console.log(err))

  }, [])
console.log(note.attributes)
  return (
    <Box className="box bg-gray fullview-box">
    {loading? <CircularProgress className='loader'/>: null} 
    <ReactMarkdown>{note.attributes? note.attributes.notes : null}</ReactMarkdown>
    </Box>
  )
}

export default CodingBookTitle