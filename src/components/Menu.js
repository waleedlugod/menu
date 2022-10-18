import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuList from "./MenuList";
import menuData from "../data/data";

function Menu() {
	const [menu, setMeny] = useState(menuData);
	const categories = [...new Set(menu.map((item) => item.category))];
	return (
		<>
			<Navbar categories={categories} />
			<MenuList />
		</>
	);
}

export default Menu;
