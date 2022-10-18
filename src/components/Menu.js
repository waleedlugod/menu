import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuList from "./MenuList";
import menuData from "../data/data";

function Menu() {
	const [menu, setMeny] = useState(menuData);
	return (
		<>
			<Navbar />
			<MenuList />
		</>
	);
}

export default Menu;
