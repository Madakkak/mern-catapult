//
// Set up a Mongo database connection using mongoose
//
const mongoose = require('mongoose');

// Set MONGODB_URI EV to your desired MongoDB server's URI in a production environment
const mongoConnectString = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

mongoose.Promise = Promise;
mongoose.connect(mongoConnectString);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to app mongo database:'));
db.once('open', function() {
  console.log('Connected to app database');
});
