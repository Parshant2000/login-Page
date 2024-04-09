import React from 'react';

import './App.css';
import { BrowserRouter,Routes , Route } from "react-router-dom";

import Mome from'./Mome';
import Emaill from './Emaill';
import Design from './Design';

function App() {
	return (
		<>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={<Emaill />} />
				<Route path="/Design" element={<Design />} />
				
				<Route path="/Mome" element={<Mome />} >

				</Route>

			</Routes>
			</BrowserRouter>



		</>

	);
}

export default App;
