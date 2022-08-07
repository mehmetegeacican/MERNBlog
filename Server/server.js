//CONFIG
require('dotenv').config();
const mongoose = require("mongoose");
const app = require("./app");


/**
 * SERVER LISTEN
 */

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
