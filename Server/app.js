const express = require("express");
const app = express();
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const multer = require("multer");

//MIDDLEWARE
//MIDDLEWARE FOR REQ.BODY
app.use(express.json());
app.use(cors());
//STATIC FILE SERVING MIDDLEWARE
app.use("/assets", express.static(__dirname + "/assets"));
//routes
app.use("/api/v1/blogs/", blogRoutes);

module.exports = app;
