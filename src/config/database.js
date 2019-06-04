module.exports = {
  host: "",
  username: "postgres",
  password: "user123",
  database: "postgres",
  dialect: "postgres",
  logging: false,
  define: {
    timestamp: true, //show time and date of creation
    underscored: true,
    underscoredAll: true
  }
};
