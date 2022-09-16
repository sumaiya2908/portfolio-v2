import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CodingBook from './components/CodingBook';
import CodingBookTitle from './components/CodingBookTitle';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />}> </Route>
				<Route path='/home' element={<Home />}> </Route>
				<Route path='/codebook' element={<CodingBook />}></Route>
				<Route path='/codebook/:title' element={<CodingBookTitle />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App