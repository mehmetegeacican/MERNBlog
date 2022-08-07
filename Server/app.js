

const express = require('express');
const app = express();
const cors = require('cors');
const blogRoutes = require("./routes/blogRoutes");
//MIDDLEWARE
//MIDDLEWARE FOR REQ.BODY
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/blogs/",blogRoutes);

module.exports = app;