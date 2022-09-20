import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodingBook from './components/CodingBook';
import CodingBookTitle from './components/CodingBookTitle';
import About from './components/About';
import Projects from './components/Projects';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />}> </Route>
				<Route path='/home' element={<Home />}> </Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/projects' element={<Projects/>}></Route>
				<Route path='/codebook' element={<CodingBook />}></Route>
				<Route path='/codebook/:title' element={<CodingBookTitle />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App