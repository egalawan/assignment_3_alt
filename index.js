const express = require('express');
const app = express();
const db = require('./database'); // Assuming this is your database configuration file

// Define your routes after initializing 'app'
app.get('/test-db', (req, res) => {
    db.query('SELECT * FROM business', (err, results) => {
        if (err) {
            return res.status(500).send('Error on the server.');
        }
        res.json(results);
    });
});

app.get('/businesses', (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 25;
    let offset = (page - 1) * limit;

    const query = 'SELECT name, type, location, rating FROM business LIMIT ?, ?';
    db.query(query, [offset, limit], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Error on the server.');
        }
        res.json(results);
    });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
