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
			message: 'New Service Provider created!',
			data: review
		});
	});
};

exports.averageRating = async function(req, res) {
	const { serviceProvider } = req.query;
	let reviewList = await Review.find({ service: serviceProvider });
	if (reviewList == null) {
		res.json({ rating: null });
	} else {
		let sum = 0;
		reviewList.forEach((review) => {
			sum += review.rating;
			console.log(sum);
		});
		console.log(reviewList.length);
		sum /= reviewList.length;
		console.log(sum);
		res.json({ rating: sum });
	}
};

exports.averageRatingEveryone = async function(req, res) {
	let reviewList = await Review.find({});
	if (reviewList == null) {
		res.json({ rating: null });
	} else {
		let sum = 0;
		reviewList.forEach((review) => {
			sum += review.rating;
			console.log(sum);
		});
		console.log(reviewList.length);
		sum /= reviewList.length;
		console.log(sum);
		res.json({ rating: sum });
	}
};
