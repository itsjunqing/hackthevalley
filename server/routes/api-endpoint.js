const express = require('express');
const router = express.Router();

router.get('/names', (req, res) => {
	res.json({ name: 'OrenLeung', query: req.query.name });
});

module.exports = router;
