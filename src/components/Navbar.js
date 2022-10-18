import React, { useEffect } from "react";

function Navbar({ categories }) {
	const cats = ["All", ...categories];
	return (
		<div className="navbar">
			{["All", ...categories].map((item) => {
				return <button key={item}>{item}</button>;
			})}
		</div>
	);
}

export default Navbar;
