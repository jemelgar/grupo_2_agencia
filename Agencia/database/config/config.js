module.exports = {
	development: {
		username: 'Mariana',
		password: 'Hola123',
		database: 'agencia',
		host: '127.0.0.1',
		dialect: 'mysql',
		// port: 3307,
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
	production: {
		username: 'root',
		password: null,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};