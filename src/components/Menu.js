import React, { useState } from "react";
import Navbar from "./Navbar";
import Item from "./Item";
import menuData from "../data/data";

function Menu() {
	const [menu, setMenu] = useState(menuData);
	const categories = [...new Set(menuData.map((item) => item.category))];

	function filterCategories(category) {
		if (category === "all") {
			setMenu(() => menuData);
		} else {
			const newMenu = menuData.filter((item) => item.category === category);
			setMenu(newMenu);
		}
	}

	return (
		<>
			<Navbar categories={categories} filterCategories={filterCategories} />
			<div className="menu-list">
				{menu.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
		</>
	);
}

export default Menu;
