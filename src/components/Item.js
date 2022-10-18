import React from "react";

function Item({ title, category, price, img, desc }) {
	return (
		<div className="item">
			<img className="photo" src={img} alt={title} />
			<div className="item-info">
				<div className="info-header">
					<h4>{title}</h4>
					<h4 className="price">${price}</h4>
				</div>
				<p>{desc}</p>
			</div>
		</div>
	);
}

export default Item;
