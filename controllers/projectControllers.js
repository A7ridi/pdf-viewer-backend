const Project = require("../models/projects");
const ErrorHandler = require("../utils/errorHandlers");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getAllProjects = catchAsyncErrors(async (req, res, next) => {
	const project = await Project.find();

	res.status(200).json({
		success: true,
		project,
	});
});

exports.createProject = catchAsyncErrors(async (req, res, next) => {
	const projects = await Project.create(req.body);

	res.status(201).json({
		success: true,
		projects,
	});
});

exports.updateProject = catchAsyncErrors(async (req, res, next) => {
	let project = await Project.findById(req.params.id);

	if (!project) {
		return next(new ErrorHandler("Product not found", 404));
	}

	project = await Project.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: true,
	});

	res.status(200).json({
		success: true,
		project,
	});
});
