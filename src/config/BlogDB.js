const Sequelize = require("sequelize");
const DB_URL =
  "postgres://epotwvee:G29rRquGMq6JKDv5cmWjp0-wrtJCmwQk@balarama.db.elephantsql.com:5432/epotwvee";
//const BlogDB = new Sequelize(process.env.DB_URL);
const BlogDB = new Sequelize(process.env.DB_URL);

//console.log(process.env.DB_URL);

BlogDB.authenticate()
  .then(() => {
    console.log(
      "Connection has been established successfully with the blog database."
    );
  })
  .catch(err => {
    console.error("Unable to connect to the blog database:", err);
  });

module.exports = BlogDB;
