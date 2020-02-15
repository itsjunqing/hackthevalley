'use strict';
// Node Modules
const express = require('express');
const router = express.Router();

//error handler
const errorHandler = require('../handler/index.js');
//Model Controllers
const userController = require('../Controller/userController.js');
const serviceController = require('../Controller/serviceController.js');
const loginController = require('../Controller/loginController.js');
const reviewController = require('../Controller/reviewController.js');

//api routes
router.route('/user').get(userController.findAll).post(userController.new);
router.route('/service').get(serviceController.findAll).post(serviceController.new);
router.route('/login').get(loginController.login);
router.route('/review').get(reviewController.findAll).post(reviewController.new);

// catch 404 and forward to error handler
router.use(errorHandler.errorForward);
// Error Handler
router.use(errorHandler.errorHandler);

module.exports = router;
