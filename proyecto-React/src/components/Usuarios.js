import React, { useEffect, useState } from 'react';

function Usuarios() {
	const [usuarios, setUsuarios] = useState([]);
	const usuariosApi = async () => {
		const url = 'admin/usuariosApi';
		const success = await fetch(url);
		const successJson = await success.json();
		setUsuarios(successJson.data);
	};
	useEffect(() => {
		console.log('Usuarios');
		usuariosApi();
	}, []);

	return (
		<div>
			<h2>Usuarios</h2>
			<ul>
				{/* {usuarios.lenght === 0 && <h2>Cargando</h2>} */}
				{usuarios.map((usuario, i) => {
					return (
						<li key={i}>
							<h3>{usuario.first_name + ' ' + usuario.last_name}</h3>
						</li>
					);
				})}
			</ul>
		</div>
	);

	// **-----------------------------------------
	// ! No mover //
	// const [usuarios, setUsuarios] = useState([]);
	// useEffect(() => {
	// 	fetch('admin/usuariosApi')
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((user) => {
	// 			setUsuarios(user.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
	// return (
	// 	<div>
	// 		<h2>Usuarios</h2>
	// 		<ul>
	// 			{/* {usuarios.lenght === 0 && <h2>Cargando</h2>} */}
	// 			{usuarios.map((usuario, i) => {
	// 				return (
	// 					<li key={i}>
	// 						<h3>{usuario.first_name}</h3>
	// 					</li>
	// 				);
	// 			})}
	// 		</ul>
	// 	</div>
	// );
	// * ------------------------------------------------//
	// !No mover //
}

export default Usuarios;
