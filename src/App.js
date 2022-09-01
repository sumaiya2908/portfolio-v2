import { Box } from '@mui/material';
import React from 'react';
import Elements from './components/Elements';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, Ind } from 'react-router-dom';
import Testani from './components/testani';
import CodingBook from './components/CodingBook';
function App() {
	return (
		<BrowserRouter>
			<Box>

				<Routes>
					<Route exact path="/" element={<Home />}> </Route>
					<Route path="/coding-book" element={<CodingBook />}></Route>
				</Routes>
			</Box>


		</BrowserRouter>

	)
}

export default App