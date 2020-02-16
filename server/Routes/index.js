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
const userReviewController = require('../Controller/userReviewController.js');


//api routes
router.route('/user').get(userController.findAll);
router.route('/userCreate').get(userController.new);
router.route('/service').get(serviceController.findAll);
router.route('/serviceCreate').get(serviceController.new);
router.route('/serviceCategory').get(serviceController.findCategory);
router.route('/login').get(loginController.login);
router.route('/review').get(reviewController.findAll);
router.route('/reviewCreate').get(reviewController.new);
router.route('/average').get(reviewController.averageRating);
router.route('/averageEveryone').get(reviewController.averageRatingEveryone);
router.route('/userAverageEveryone').get(userReviewController.userAverageRatingEveryone);
router.route('/userAverage').get(userReviewController.userAverageRating);
router.route('/userReview').get(userReviewController.userFindAll)
router.route('/userReviewCreate').get(userReviewController.userNew);

// catch 404 and forward to error handler
router.use(errorHandler.errorForward);
// Error Handler
router.use(errorHandler.errorHandler);

module.exports = router;
