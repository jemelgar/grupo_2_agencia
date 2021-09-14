const path = require('path');
const fs = require('fs');
// const toursFilePath = path.join(__dirname, "../database/db-ignored.json");
const db = require('../database/models');
const Op = db.Sequelize.Op;
const sequelize = db.sequelize;
// Añadiendo requerimmientos de sequelize
// const sequelize = db.sequelize;
// const { Op } = require('sequelize');

const controlador = {
	index: (req, res) => {
		db.Producto.findAll().then((resultados) => {
			resultados.forEach(function (destino) {
				// destino.date = new Date(destino.date).toLocaleDateString("es-ES");
				// console.log(destino.date.toLocaleDateString("es-ES"));

				if (destino.destination_promoted == 0) destino.destination_promoted = 'normal';
				else destino.destination_promoted = 'destacado';
			});
			// console.log(resultados);

			// return res.send(resultados);
			res.render('index', { resultados });
		});
	},

	// Función search ligada a formulario de index
	// funcion : function (resultados) {

	// }
	search: (req, res) => {
		let paquete = req.query.destino.toLowerCase();
		db.Producto.findAll({
			where: {
				name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + paquete + '%'),
			},
		})
			.then((resultados) => {
				res.render('tourResults', { resultados });
				// res.json(resultados);
			})
			.catch((error) => res.send(error));
	},
	detail: (req, res) => {
		db.Producto.findByPk(req.params.id).then((tour) => {
			res.render('tour', { tour });
			//return res.json(tours);
		});
	},
	//   delete: (req, res) => {
	// 		db.Producto.destroy({
	// 			where: {
	// 				id: req.params.id,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				return res.json(response);
	// 			})
	// 			.catch((error) => res.send(error));
	//     }
};

module.exports = controlador;
