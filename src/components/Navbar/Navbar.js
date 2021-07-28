import React, { useState } from "react";
import { NavbarData } from "./NavbarData";
import { FaBars } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const DataList = NavbarData.map(({ url, title }, index) => {
		return (
			<li key={index}>
				<NavLink exact to={url} activeClassName="active">
					{title}
				</NavLink>
			</li>
		);
	});
	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<nav>
			<div className="logo">
				Crazy<font>Burger</font>
			</div>
			<ul className={clicked ? "menu-list close" : "menu-list"}>{DataList}</ul>
			<div className="menu-icon" onClick={handleClick}>
				<FaBars className={clicked ? <AiFillCloseCircle /> : <FaBars />} />
			</div>
		</nav>
	);
};

export default Navbar;
