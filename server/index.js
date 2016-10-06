const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
module.exports = app;

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');

const wpConfig = webpack(webpackConfig);

app.use(webpackMiddleware(wpConfig));
app.use( bodyParser.json() );


// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: './github-fetcher.sqlite3'
//   }
// });

// TODO: Set up mongo instead

app.post('/repos/import', function (req, res) {
  // TODO
});


app.get('/repos', function (req, res) {
  // TODO
});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'/../client/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);
