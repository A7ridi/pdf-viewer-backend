const express = require("express");
const {
	createProject,
	updateProject,
	getAllProjects,
} = require("../controllers/projectControllers");
const router = express.Router();

router.route("/projects").get(getAllProjects);
router.route("/project/new").post(createProject);
router.route("/project/:id").put(updateProject);

module.exports = router;
