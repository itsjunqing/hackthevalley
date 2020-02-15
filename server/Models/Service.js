'use strict';
const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    userID: String,
    title: String,
    description: String,
    rating: [Number],
    category: String,
    cost: [Number],
    date: {type:Date, default:Date.now}
});

module.exports = mongoose.model("Services", ServiceSchema);