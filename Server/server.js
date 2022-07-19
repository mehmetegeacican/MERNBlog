require('dotenv').config();
const express = require('express');

//Express App stored in constant
const app = express();


app.get("/",(req,res) => {
    res.json({message:"Hello There!!"});
})
//Listen for Requests
app.listen(process.env.PORT,() => {
    console.log("Listening on Port 4000");
})