const db = require('../../database/models');

const usersApiController = {
	list: (req, res) => {
		db.Usuario.findAll({
			include: ['tipoUsuario'],
		}).then((users) => {
			let tipoUsuario = users.id_tipo_usuario;
			if (tipoUsuario == 1) {
				tipoUsuario = 'Administrador';
			} else {
				tipoUsuario = 'Cliente';
			}
			let datos = {
				meta: {
					status: 200,
					total: users.length,
					url: '/usuariosApi',
				},
				data: users.map((user) => {
					return {
						id: user.id,
						first_name: user.first_name,
						last_name: user.last_name,
						email: user.email,
						detail: '/usuariosApi/' + user.id,
						tipoUsuario: tipoUsuario,
					};
				}),
			};
			res.json(datos);
		});
	},
	// Detalle de usuario por id
	detail: (req, res) => {
		db.Usuario.findByPk(req.params.id, {
			include: ['tipoUsuario'],
		}).then((user) => {
			let tipoUsuario = user.id_tipo_usuario;
			if (tipoUsuario == 1) {
				tipoUsuario = 'Administrador';
			} else {
				tipoUsuario = 'Cliente';
			}
			let data = {
				meta: {
					status: 200,
					total: user.id.length,
					url: '/usuariosApi/' + user.id,
				},
				data: {
					id: user.id,
					first_name: user.first_name,
					last_name: user.last_name,
					email: user.email,
					image: '/img/usersImages/' + user.image,

					tipoUsuario: tipoUsuario,
				},
			};
			res.json(data);
		});
	},
};
module.exports = usersApiController;
