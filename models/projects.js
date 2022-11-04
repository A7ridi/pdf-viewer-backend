const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	id: {
		type: String,
		required: [true, "Please enter project id"],
		trim: true,
	},
	name: {
		type: String,
		required: [true, "Please enter project name"],
	},
	budget: {
		type: Number,
		required: [true, "Please enter project budget"],
		maxLength: [8, "Price cannot exceed 8 characters"],
	},
	endDate: {
		type: String,
		required: [true, "Please enter project end date"],
	},
});

module.exports = mongoose.model("Project", projectSchema);
