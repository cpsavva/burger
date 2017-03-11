
const mysql = require('mysql');

const connection  = 
mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

/*connect to mysql */
connection.connect(function(err) {
  if (err) throw err;

  console.log("connected as id " + connection.threadId);

});



module.exports = connection;

