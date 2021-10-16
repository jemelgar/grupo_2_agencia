// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Productos() {
	const [productos, setProductos] = useState([]);

	const productosApi = async () => {
		const url = 'http://localhost:3001/admin/productosApi';
		const success = await fetch(url);
		const successJson = await success.json();
		console.log('%c PRODUCTOS', 'color:yellow', successJson);
		setProductos(successJson.data);
	};
	useEffect(() => {
		// console.log('Productos');
		productosApi();
	}, []);

	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Productos</h5>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Detalle</th>
								</tr>
							</thead>
							<tfoot>
								<tr></tr>
							</tfoot>
							<tbody>
								{productos.map((producto, i) => {
									// return <li key={i}>producto.first_name + ' ' +producto.last_name}</li>;
									let detail = producto.detail;
									return (
										<tr key={i}>
											<td>{producto.id}</td>
											<td>{producto.name}</td>
											<td>
												<Link to={`/productosApi/${producto.id}`}>{detail}</Link>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Productos;
