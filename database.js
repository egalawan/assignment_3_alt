const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 13313,
  user: 'root',
  password: 'example',
  database: 'assign'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
