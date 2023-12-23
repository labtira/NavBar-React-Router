import React from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Blog from './Components/Blog';
import Sub from './Components/Sub';
import Services from './Components/Services';
import { Routes, Route } from "react-router-dom"
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
	return (
		<React.Fragment>
		<Navbar/>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="about" element={ <About/> } />
				<Route path="blog" element={ <Blog/> } />
				<Route path="sub" element={ <Sub/> } />
				<Route path="services" element={ <Services/> } />
			</Routes>
			<Footer/>
		</React.Fragment>
	);
}
export default App;
