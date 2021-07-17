const destinodata = require('../database/db-ignored.json');

const controlador = {
	index: (req, res) => {
		res.render('index', { ...destinodata });
	},
};

module.exports = controlador;
