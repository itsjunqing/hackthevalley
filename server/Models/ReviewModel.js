'use strict';
const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    rating: String,
    comment: String,
    userName: String,
    service: String,
    date: {type:Date, default:Date.now}
});

module.exports = mongoose.model("Reviews", ReviewSchema);