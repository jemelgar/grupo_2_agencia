const db = require('../../database/models');

const productsApiController = {
	list: (req, res) => {
		db.Producto.findAll().then((products) => {
			let datos = {
				meta: {
					status: 200,
					total: products.length,
					url: '/productosApi',
				},
				data: products.map((product) => {
					let destino = product.destination_promoted;
					if (destino == 0) {
						destino = 'Normal';
					} else {
						destino = 'Destacado';
					}
					return {
						id: product.id,
						destination: destino,
						name: product.name,
						date: product.date,
						img_destination: product.img_destination,
						rating: product.rating,
						description: product.description,
						price: product.price,
						category: product.categoria,
						detail: '/productosApi/' + product.id,
					};
				}),
			};

			res.json(datos);
		});
	},
	detail: (req, res) => {
		db.Producto.findByPk(req.params.id).then((product) => {
			let destino = product.destination_promoted;
			if (destino == 0) {
				destino = 'Normal';
			} else {
				destino = 'Destacado';
			}
			let data = {
				meta: {
					status: 200,
					total: product.id.length,
					url: '/productosApi/' + product.id,
				},

				data: {
					id: product.id,
					name: product.name,
					date: product.date,
					destination: destino,
					img_destination: product.img_destination,
					rating: product.rating,
					description: product.description,
					price: product.price,
					image: '/img/' + product.image,
					categoria: product.categoria,
				},
			};
			res.json(data);
		});
	},
};
module.exports = productsApiController;
