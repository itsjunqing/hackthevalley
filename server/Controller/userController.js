User = require('../Models/UserModel.js');

exports.findAll = async function(req, res) {
	try {
		const results = await User.find({});
		res.json({
			status: 'success',
			message: 'Contacts retrieved successfully',
			data: results
		});
	} catch (err) {
		res.json(err);
		throw err;
	}
};

exports.new = function(req, res) {
	let user = User();
	user.name = req.query.name;
	user.email = req.query.email;
	//saves in database
	user.save(function(err) {
		if (err) {
			res.json(err);
			throw err;
		}
		res.json({
			message: 'New contact created!',
			data: user
		});
	});
};

