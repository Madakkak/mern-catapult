//
// Initialize our web server using Express
//
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const morgan = require('morgan');
module.exports = app;


// Initialize mongo database connection
require('./database/database-config.js');

//
// Pull in webpack middleware using our custom webpack config
//
const webpackMiddleware = require('./webpack/webpack-setup');


//
// Attach middleware
//

// Attach morgan, a request logging middleware, to all routes
app.use(morgan(':method :url :response-time :status'));

// Configure webpack to bundle automatically
app.use(webpackMiddleware);

// Configure bodyParser to extract req.body as JSON
app.use( bodyParser.json() );


//
// Routes
//

app.post('/approute', function (req, res) {
  // Define a POST route as needed
});

app.get('/approute', function (req, res) {
  // Define a GET route as needed
});

// Catch-all route
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'/../client/index.html'));
});


//
// Start server
//
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);
