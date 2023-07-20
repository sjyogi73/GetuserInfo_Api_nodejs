// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'sjyogi',
  port:3306,
  password: 'Sjyogi@73',
  database: 'teste2',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
    return;
  }
  console.log('Connected to database as ID', connection.threadId);
});

module.exports = connection;
