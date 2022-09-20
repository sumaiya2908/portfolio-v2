import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Hero from './Hero'
import About from './About'

function Home() {

  const [change, setChange] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (change) navigate('/about')
  }, [change])

  return (
    <>
      {change ?
        <About /> :
        <Hero setChange={setChange} />}
    </>
  )
}

export default Home