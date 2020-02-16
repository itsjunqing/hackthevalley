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
	// console.log('new working');
	let service = Service();
	service.userID = req.query.userID;
	service.title = req.query.title;
	service.description = req.query.description;
	service.rating = req.query.rating;
	service.category = req.query.category;
	service.cost = req.query.cost;
	service.long = req.query.long;
	service.lat = req.query.lat;

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
