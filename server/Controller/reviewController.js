Review = require('../Models/ReviewModel.js');

exports.findAll = async function(req, res) {
    try {
        const results = await Review.find({});
        res.json({
            status: 'success',
            message: 'Review retrieved successfully',
            data: results
        });
    } catch (err) {
        res.json(err);
        throw err;
    }
};

exports.new = function(req, res) {
    let review = Review();
    review.rating = req.body.rating;
    review.comment = req.body.comment;
    review.userName = req.body.userName;
    review.service = req.body.service;

    //saves in database
    review.save(function(err) {
        if (err) {
            res.json(err);
            throw err;
        }
        res.json({
            message: 'New Service created!',
            data: review
        });
    });
};
