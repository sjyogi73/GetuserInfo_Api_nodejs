// app.js
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = 3600; 
app.use(cors());

app.get('/api/data', (req, res) => {
  const sqlQuery = 'SELECT * FROM user_details'; // Replace 'your_table_name' with the name of your table
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Failed to fetch data from the database' });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
