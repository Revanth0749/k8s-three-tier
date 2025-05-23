const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mydb'
});
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});
module.exports = connection;
