module.exports = {
  development: {
    username: "root",
    password: "rootandrea",
    database: "agencia",
    host: "127.0.0.1",
    dialect: "mysql",
    //ort: 3307,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
