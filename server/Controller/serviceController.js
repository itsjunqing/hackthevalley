Service = require('../Models/ServiceModel.js');

exports.findAll = async function(req, res) {
	try {
		const results = await Service.find({});
		res.json({
			status: 'success',
			message: 'Service retrieved successfully',
			data: results
		});
	} catch (err) {
		res.json(err);
		throw err;
	}
};

exports.findCategory = async function(req, res) {
	try {
		const { category } = req.query;
		let searchResult = await Service.find({ category: category });
		console.log(searchResult);
		res.json({
			status: 'success',
			message: 'Service retrieved successfully',
			data: searchResult
		});
	} catch (err) {
		res.json(err);
		throw err;
	}
};

exports.new = function(req, res) {
	// console.log(req.query.userID);
	const { userID, title, description, rating, category, cost, long, lat } = req.query;
	let service = Service();

	service.userID = userID;
	service.title = title;
	service.description = description;
	service.rating = rating;
	service.category = category;
	service.cost = cost;
	service.long = long;
	service.lat = lat;

	//saves in database
	service.save(function(err) {
		if (err) {
			res.json(err);
			throw err;
		}
		res.json({
			message: 'New Service created!',
			data: service
		});
	});
};
