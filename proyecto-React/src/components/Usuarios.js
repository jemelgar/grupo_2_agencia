import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Usuarios() {
	const [usuarios, setUsuarios] = useState([]);
	const usuariosApi = async () => {
		// const url = 'http://192.168.1.37:3001/admin/usuariosApi';
		const url = 'http://localhost:3001/admin/usuariosApi';
		const success = await fetch(url);
		console.log(success);
		const successJson = await success.json();
		// console.log(successJson);
		setUsuarios(successJson.data);
	};
	useEffect(() => {
		// console.log('Usuarios');
		usuariosApi();
	}, []);

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
									<th>Detalle</th>
								</tr>
							</thead>
							<tfoot>
								<tr></tr>
							</tfoot>
							<tbody>
								{usuarios.map((usuario) => {
									// return <li key={i}>{usuario.first_name + ' ' + usuario.last_name}</li>;
									let detail = usuario.detail;
									return (
										<tr key={usuario.id}>
											<td>{usuario.id}</td>
											<td>{usuario.first_name + ' ' + usuario.last_name}</td>
											<td>
												<Link to={`/usuariosApi/${usuario.id}`}>{detail}</Link>
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

export default Usuarios;
