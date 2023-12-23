import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../assets/med.png"
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to="/"><img className="logo" src={logo}/></Link>
			<nav ref={navRef}>
				<a href="/#"><Link to="/">Home</Link></a>
				<a href="/#"><Link to="about">About</Link></a>
				<a href="/#"><Link to="blog">Blog</Link></a>
				<a href="/#"><Link to="services">Services</Link></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
					className="sub">
					<Link className="sub-txt" to="sub">Subscribe</Link>
			</button>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
