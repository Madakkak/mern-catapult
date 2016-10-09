//
// Webpack declarations and set up.
// This file exports a webpack setup object that can be attached as Express middleware.
//
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const webpackSetup = webpack(webpackConfig);

module.exports = webpackMiddleware(webpackSetup);
