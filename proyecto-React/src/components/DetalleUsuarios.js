import React, { useEffect, useState } from 'react';

function DetalleUsuarios(props) {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		console.log('Usuarios');
		const usuariosApi = async () => {
			console.log('llamando usuariosAPI');
			const url = `http://192.168.1.37:3001/admin/usuariosApi/${props.match.params.id}`;
			const success = await fetch(url);
			console.log(success);
			const successJson = await success.json();
			console.log(successJson);
			setUsuarios(successJson.data);
		};

		usuariosApi();
	}, [props.match.params.id]);

	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Usuarios en la base de datos</h5>
				</div>
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Email</th>
									<th>Image</th>
									<th>Tipo Usuario</th>
								</tr>
							</thead>
							<tfoot>
								<tr></tr>
							</tfoot>
							<tbody>
								<tr>
									<td>{usuarios.id}</td>
									<td>{usuarios.first_name + ' ' + usuarios.last_name}</td>
									<td>{usuarios.email}</td>
									<td>{usuarios.image}</td>
									<td>{usuarios.tipoUsuario}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetalleUsuarios;
