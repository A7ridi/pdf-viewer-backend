const ErrorHandler = require("../utils/errorHandlers");

module.exports = (err, req, res, next) => {
	(err.statusCode = err.statusCode || 500),
		(err.message = err.message || "Internal server error");

	// mongodb error handling
	if (err.name === "CastError") {
		const msg = `Resource not found. Invalid: ${err.path}`;
		err = new ErrorHandler(msg, 400);
	}

	// mongoose dplicate key error
	if (err.code === 11000) {
		const msg = `Duplicate ${Object.keys(err.keyValue)} entered`;
		err = new ErrorHandler(msg, 400);
	}

	res.status(err.statusCode).json({
		success: true,
		error: err,
		message: err.message,
	});
};
