var mysql = require('mysql2');
var myPassword = require('./env.js');




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password :  myPassword.myPassword, // go to the env.js file and update your password
  database : 'weddo'
});


connection.connect((err, success) => {
  err ? console.log("connection failed", err) : console.log("Database connected successfully")
})


module.exports = connection;