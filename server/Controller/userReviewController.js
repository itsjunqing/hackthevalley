UserReview = require('../Models/UserReviewModel.js');

exports.userFindAll = async function(req, res) {
	try {
		const results = await UserReview.find({});
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

exports.userNew = function(req, res) {
    let review = UserReview();
    review.rating = req.query.rating;
    review.comment = req.query.comment;
    review.userName = req.query.userName;
    review.serviceProvider = req.query.serviceProvider;

	//saves in database
	review.save(function(err) {
		if (err) {
			res.json(err);
			throw err;
		}
		res.json({
			message: 'New User Review created!',
			data: review
		});
	});
};

exports.userAverageRating = async function(req, res) {
    const {userName} = req.query;
    let reviewList = await UserReview.find({userName: userName});
    if (reviewList == null){
        res.json({rating: null})
    }else{
        let sum = 0;
        reviewList.forEach(review => {
            sum += review.rating;
            console.log(sum);
        });
        console.log(reviewList.length);
        sum /= reviewList.length;
        console.log(sum);
        res.json({rating: sum})
    }
}

exports.userAverageRatingEveryone = async function(req, res) {
    let reviewList = await UserReview.find({});
    if (reviewList == null){
        res.json({rating: null})
    }else{
        let sum = 0;
        reviewList.forEach(review => {
            sum += review.rating;
            console.log(sum);
        });
        console.log(reviewList.length);
        sum /= reviewList.length;
        console.log(sum);
        res.json({rating: sum})
    }
}
