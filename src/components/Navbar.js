import React, { useEffect } from "react";

function Navbar({ categories, filterCategories }) {
	const cats = ["All", ...categories];
	return (
		<div className="navbar">
			{["all", ...categories].map((cat) => {
				return (
					<button
						className="category"
						key={cat}
						onClick={() => filterCategories(cat)}
					>
						{cat}
					</button>
				);
			})}
		</div>
	);
}

export default Navbar;
