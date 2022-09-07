import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import config from '../config';
import { Box, CircularProgress } from '@mui/material';

function CodingBookTitle() {
  const { title } = useParams();
  const [note, setNote] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(
      `https://strapi-backend-portfoliov2.herokuapp.com/api/code-books?filters[title][$eq]=${title}`,
      config
    )
      .then((response) => { setNote(response.data.data); setLoading(false) })
      .catch((err) => console.log(err))

  }, [])
  return (
    // {loading ? <CircularProgr> :
    <Box className="box bg-gray">CodingBookTitle
    <CircularProgress/>
    </Box>
  )
}

export default CodingBookTitle