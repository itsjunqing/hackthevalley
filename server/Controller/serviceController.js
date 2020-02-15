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
		const {category} = req.query;
		let searchResult = await Service.find({category: category});
		console.log(searchResult)
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
    let service = Service();
    service.userID = req.body.userID;
    service.title = req.body.title;
    service.description = req.body.description;
    service.rating = req.body.rating;
    service.category = req.body.category;
    service.cost = req.body.cost;
    service.long = req.body.long;
    service.lat = req.body.lat;

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
