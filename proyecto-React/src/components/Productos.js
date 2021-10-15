// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
function Productos() {
	const [productos, setProductos] = useState([]);

	const productosApi = async () => {
		const url = 'admin/productosApi';
		const success = await fetch(url);
		const successJson = await success.json();
		console.log(successJson);
		setProductos(successJson.data);
	};
	useEffect(() => {
		console.log('Productos');
		productosApi();
	}, []);

	return (
		<div>
			<h2>Productos</h2>
			<ul>
				{productos.map((producto, i) => {
					return (
						<li key={i}>
							<h3>{producto.name}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Productos;
