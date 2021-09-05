const fs = require('fs');
const { getMaxListeners } = require('process');
const { all } = require('../routes/admin');
const db = require('../database/models');
// let users = await db.Usuario.findAll();
const prueba = {
	buscar: function () {
		db.Usuario.findAll({
			include: ['tipoUsuario'],
		}).then((usuarios) => {
			console.log(JSON.stringify(usuarios, null, 2));
		});
	},

	buscarEmail: function (email) {
		db.Usuario.findAll({ email }).then((email2) => {
			if (email == email2) {
				console.log(JSON.stringify(email2, null, 2));
			} else {
				console.log('No email found');
			}
		});
	},
};

module.exports = prueba;

console.log(prueba.buscarEmail());
