//CONFIG
require('dotenv').config();


const express = require('express');
const blogRoutes = require("./routes/blogRoutes");
const mongoose = require("mongoose");

//Express App
const app = express();

//MIDDLEWARE
//MIDDLEWARE FOR REQ.BODY
app.use(express.json())

//routes
app.use("/api/v1/blogs/",blogRoutes);

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB Successfully");
    //Listen for Requests
    app.listen(process.env.PORT,() => {
        console.log("Listening on Port 4000");
    })
}).catch((err) => {
    console.log(err);
});
