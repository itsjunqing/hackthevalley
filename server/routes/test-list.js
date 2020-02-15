const express = require('express');
const router = express.Router();

router.get('/serviceList/:serviceName', (req, res) => {
	const { serviceName } = req.params;

	if (serviceName === 'plumbing') {
		res.json({
			service: [ { name: "Brain's Plumbing", rating: 5 }, { name: "Alex's Plumbing", rating: 4 } ]
		});
	} else {
		res.status('400').json({ error: 'Invalid serviceName' });
	}
});

module.exports = router;
