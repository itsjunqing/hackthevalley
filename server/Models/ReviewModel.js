'use strict';
const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
	rating: Number,
	comment: String,
	userName: String,
	serviceProvider: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reviews', ReviewSchema);
