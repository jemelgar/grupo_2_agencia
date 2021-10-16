import React, { useEffect, useState } from 'react';

function LastUser() {
	const [usuario, setUsuarios] = useState([]);
	const usuariosApi = async () => {
		const url = 'http://localhost:3001/admin/usuariosApi';
		const success = await fetch(url);

		const successJson = await success.json();
		const users = successJson.data;
		const lastUser = users.pop();
		// console.log(successJson);
		setUsuarios(lastUser);
	};
	useEffect(() => {
		// console.log('Usuarios');
		usuariosApi();
	}, []);
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">Último usuario</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<h>
							<strong>{usuario.first_name + ' ' + usuario.last_name}</strong>
						</h>
					</div>

					<p>Correo: {usuario.email}</p>
					<p>Tipo de Usuario: {usuario.tipoUsuario}</p>

					{/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
						View movie detail */}
					{/* </a> */}
				</div>
			</div>
		</div>
	);
}

export default LastUser;
