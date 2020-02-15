User = require('../Models/User.js');

exports.new = function(req, res) {
	let user = User();
	user.name = req.body.name;
	user.email = req.body.email;
	//saves in database
	console.log('when to new');
	user.save(function(err) {
		if (err) res.json(err);
		res.json({
			message: 'New contact created!',
			data: user
		});
	});
};
