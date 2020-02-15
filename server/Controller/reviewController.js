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

exports.averageRating = async function(req, res) {
    let reviewList = await Review.find({});
    let sum = 0;
    reviewList.forEach(review => {
        sum += parseInt(review.rating);
        console.log(sum);
    });
    console.log(reviewList.length);
    sum /= reviewList.length;
    console.log(sum);
    res.json({rating: sum})
}