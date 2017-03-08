
const mysql = require('mysql');

const mysqlconnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});



module.exports = mysqlconnect;

