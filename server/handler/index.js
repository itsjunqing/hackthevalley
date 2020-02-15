exports.errorForward = function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
};

exports.errorHandler = function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
};
