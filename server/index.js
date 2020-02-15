'use strict';
// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// App Modules
const routes = require('./Routes');

// Set up app
const app = express();
const port = process.env.PORT || 3000;
const mongooseUrl =
  'mongodb+srv://editsync:1234567890@hackthevalley-mbz5f.gcp.mongodb.net/test?retryWrites=true&w=majority';

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect to mongodb altas
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Added check for DB connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log('connection to db open');
});


// include routes
app.use('/api/v1', routes);
//start up server
app.listen(port, () => console.log(`Swagger That API listening on port ${port}!`));
