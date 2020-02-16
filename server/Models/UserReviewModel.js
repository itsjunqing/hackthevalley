'use strict';
const mongoose = require('mongoose');

const UserReviewSchema = mongoose.Schema({
	rating: Number,
	comment: String,
	userName: String,
	serviceProvider: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reviews on Users', UserReviewSchema);
