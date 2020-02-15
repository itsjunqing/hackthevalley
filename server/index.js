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

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(
	'mongodb+srv://editsync:1234567890@hackthevalley-mbz5f.gcp.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

// include routes
app.use('/api/v1', routes);

app.listen(port, () => console.log(`Swagger That API listening on port ${port}!`));
