import React from 'react'


function GridRow({products}) {
	return ( 
		<>
		<tbody>
			{products.map((prod, id) => (<tr key={prod.id}>
				<td>{prod.name}</td>
				<td>{prod.brand}</td>
				<td>{prod.quantity}</td>
				</tr>))}
		</tbody>
		</>
	 );
}

export default React.memo(GridRow);