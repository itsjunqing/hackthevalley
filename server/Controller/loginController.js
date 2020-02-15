User = require('../Models/UserModel.js');

exports.login = async function(req, res) {
	const { password, name } = req.query;

	if (password === 'password') {
		const userInfo = await User.findOne({ name: name });

		if (userInfo !== null) {
			res.json({
				success: true,
				message: 'login successfully',
				data: userInfo
			});
		} else {
			res.json({
				success: false,
				message: 'invalid username'
			});
		}
	} else {
		res.json({
			success: false,
			message: 'invalid password'
		});
	}
};
