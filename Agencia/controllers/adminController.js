const destinodata = require('../database/data.json');

const controlador = {
	edit: (req, res) => {
		res.render('admin/modProduct', { ...destinodata });
	},
};

module.exports = controlador;
