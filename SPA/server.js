const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 4200;

// initialize express.
const app = express();

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('public'));

// set up a route for redirect.html
app.get('/redirect', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/redirect.html'));
});

// Set up a route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Sample app listening on port ${DEFAULT_PORT}!`);
});

module.exports = app;
