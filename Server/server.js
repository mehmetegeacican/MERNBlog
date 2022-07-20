//CONFIG
require('dotenv').config();
const express = require('express');
const blogRoutes = require("./routes/blogRoutes");
//Express App
const app = express();
//MIDDLEWARE
//MIDDLEWARE FOR REQ.BODY
app.use(express.json())

//routes
app.use("/api/v1/blogs/",blogRoutes);
//Listen for Requests
app.listen(process.env.PORT,() => {
    console.log("Listening on Port 4000");
})