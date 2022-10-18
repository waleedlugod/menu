import React, { useState } from "react";
import Navbar from "./Navbar";
import Item from "./Item";
import menuData from "../data/data";

function Menu() {
	const [menu, setMeny] = useState(menuData);
	const categories = [...new Set(menu.map((item) => item.category))];
	return (
		<>
			<Navbar categories={categories} />
			<div className="menu-list">
				{menu.map((item) => {
					console.log(item);
					return <Item key={item.id} {...item} />;
				})}
			</div>
		</>
	);
}

export default Menu;
