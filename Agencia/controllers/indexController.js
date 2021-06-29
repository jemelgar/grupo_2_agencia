const destinodata = require('../database/data.json');

const controlador = {
	index: (req, res) => {
		res.render('index', { ...destinodata });
	},
};

module.exports = controlador;
