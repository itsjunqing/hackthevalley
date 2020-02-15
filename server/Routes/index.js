'use strict';
// Node Modules
const express = require('express');
const router = express.Router();

//Model Controllers
const Service = require('../Models/ServiceModel');
const userController = require('../Controller/userController.js');
const serviceController = require('../Controller/serviceController.js');

// catch 404 and forward to error handler
router.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handler
router.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
});

router.route('/user').get(userController.findAll).post(userController.new);
router.route('/services').get(serviceController.findAll).post(serviceController.new);

module.exports = router;
