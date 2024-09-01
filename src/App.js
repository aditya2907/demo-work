import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<DashBoard />}>
				<Route index element={<Home />} />
				<Route path="About" element={<About />} />
				<Route path="Contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
