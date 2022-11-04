const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
	dotenv.config();
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const project = require("./routes/projectRoute");

app.use("/api/v1", project);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// middleware for error
app.use(errorMiddleware);

module.exports = app;
