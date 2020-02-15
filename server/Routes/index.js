'use strict';
// Node Modules
const express = require('express');
const router = express.Router();

//error handler
const errorHandler = require('../handler/index.js');
//Model Controllers
const userController = require('../Controller/userController.js');
const serviceController = require('../Controller/serviceController.js');


//api routes
router.route('/user').get(userController.findAll).post(userController.new);
router.route('/service').get(serviceController.findAll).post(serviceController.new);

// catch 404 and forward to error handler
router.use(errorHandler.errorForward);
// Error Handler
router.use(errorHandler.errorHandler);

module.exports = router;
