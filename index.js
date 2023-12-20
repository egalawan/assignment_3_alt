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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
