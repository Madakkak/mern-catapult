//
// Webpack Configuration
//
// Set up webpack with Babel loader and React, ES6, and stage-2 presets
// See documentation: https://webpack.github.io/docs/configuration.html
//
module.exports = {
  entry: "./client/app.jsx",
  output: {
    path: __dirname,
    filename: "app-bundle.js"
  },
  module: {
    loaders: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
    }]
  }
}
