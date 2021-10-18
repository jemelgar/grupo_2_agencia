import React, { useEffect, useState } from 'react';

function DetalleProductos(props) {
	const [productos, setproductos] = useState([]);

	useEffect(() => {
		console.log('Productos');
		const productosApi = async () => {
			console.log('llamando productosAPI');
			const url = `http://192.168.1.37:3001/admin/productosApi/${props.match.params.id}`; //aqui no sale
			const success = await fetch(url);
			console.log(success);
			const successJson = await success.json();
			console.log(successJson);
			setproductos(successJson.data);
		};

		productosApi();
	}, [props.match.params.id]);

	return (
		// <div className="col-lg-6 mb-4">
		<div className="card shadow mb-4">
			<div className="card-header py-3">
				<h5 className="m-0 font-weight-bold text-gray-800">Productos en la base de datos</h5>
			</div>
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="90%" cellSpacing="0">
						<thead>
							<tr>
								<th>ID</th>
								<th>Destino</th>
								<th>Nombre</th>
								<th>Fecha</th>
								<th>Imagen</th>
								<th>Rating</th>
								<th>Descripción</th>
								<th>Precio</th>
								<th>Categoria</th>
							</tr>
						</thead>
						<tfoot>
							<tr></tr>
						</tfoot>
						<tbody>
							<tr>
								<td>{productos.id}</td>
								<td>{productos.destination}</td>
								<td>{productos.name}</td>
								<td>{productos.date}</td>
								<td> <img src={`http://192.168.1.37:3000${productos.img_destination}` } /></td>
								<td>{productos.rating}</td>
								<td>{productos.description}</td>
								<td>{productos.price}</td>
								<td>{productos.categoria}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		// </div>
	);
}

export default DetalleProductos;
