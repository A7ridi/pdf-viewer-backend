const mongoose = require("mongoose");

const connectDatabase = (url) => {
	mongoose.connect(url).then((data) => {
		console.log(`MondoDB connected with: ${data.connection.host}`);
	});
};

module.exports = connectDatabase;
