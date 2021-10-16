import React, { useEffect, useState } from 'react';

function LastProduct() {
	const [productos, setProductos] = useState([]);

	const productosApi = async () => {
		const url = 'http://localhost:3001/admin/productosApi';
		const success = await fetch(url);
		const successJson = await success.json();
		const products = successJson.data;
		const lastProduct = products.pop();

		// console.log('%c ÚLTIMO PRODUCTO', 'color:green', lastProduct);
		setProductos(lastProduct);
	};
	useEffect(() => {
		productosApi();
	}, []);
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<h>
							<strong>{productos.name}</strong>
						</h>
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: 40 + 'rem' }}
							src={productos.img_destination}
							alt="CDMX"
						/>
					</div>

					<p>{productos.description}</p>
					{/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
						View movie detail */}
					{/* </a> */}
				</div>
			</div>
		</div>
	);
}

export default LastProduct;
