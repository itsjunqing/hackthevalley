'use strict';
// Node Modules
const express = require('express');
const router = express.Router();

//Model Controllers
const Service = require('../Models/ServiceModel');
const userController = require('../Controller/userController.js');

router.route('/user').get(userController.findAll).post(userController.new);

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

router.post('/services', function(req, res) {
	const myService = new Service({
		userID: req.body.userID,
		title: req.body.title,
		description: req.body.description,
		rating: Number(req.body.rating),
		category: req.body.category,
		cost: Number(req.body.cost)
	});

	myService
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
