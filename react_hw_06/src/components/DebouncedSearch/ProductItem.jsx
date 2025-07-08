import React from "react";

function ProductItem({name}) {
	return <li>{name}</li>;
}

export default React.memo(ProductItem);