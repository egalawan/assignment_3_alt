const express = require('express');
const app = express();
const db = require('./database'); // Assuming this is your database configuration file


// Define a route handler for the root path ("/")
app.get('/', (req, res) => {
    // res.send('Welcome to the Business Listings App');
    res.redirect('/test-db');
});

// Define your routes after initializing 'app'
app.get('/test-db', (req, res) => {
    db.query('SELECT * FROM business', (err, results) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        }
        res.json(results);
    });
});

app.get('/filter', (req, res) => {
    const { name, type, location, page, pageSize } = req.query;
    const offset = (page - 1) * pageSize; // Calculate the offset
  
    const query = `
      SELECT name, type, location, rating
      FROM business
      WHERE name LIKE ? AND type LIKE ? AND location LIKE ?
      LIMIT ?, ?;`;
    const values = [`%${name}%`, `%${type}%`, `%${location}%`, offset, parseInt(pageSize)];
  
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Error querying the database:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(results);
    });
  });
  
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
