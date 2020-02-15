'use strict';
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	userID: String
});

module.exports = mongoose.model('Users', UserSchema);