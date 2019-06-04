module.exports = {
  host: "teste-postgres",
  username: "postgres",
  password: "user123",
  database: "LocalDB",
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamp: true, //show time and date of creation
    underscored: true,
    underscoredAll: true
  }
};
