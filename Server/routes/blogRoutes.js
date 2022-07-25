const express = require('express');
const Blogs = require("../models/blogModel");
const router = express.Router();


/**
 * blogRoutes
 * GET REQUEST
 * GETS ALL BLOGS
 */
router.get("/",(req,res) => {
    res.json("GET Blogs")
})
/**
 * blogRoutes
 * GET REQUEST
 * GETS ONE BLOG BY ID
 */
router.get("/:id",(req,res) => {
    res.json("GET Blog by id",)
})
/**
 * blogRoutes
 * POST REQUEST
 * POSTS A NEW BLOG
 */
router.post("/", async (req,res) => {
    const {title,description,body} = req.body;
    console.log(title,description,body);
    try{
        const blogM = await Blogs.create({title,description,body});
        console.log(blogM);
        res.status(200).json(blogM);
    }
    catch(err){
        res.status(400).json({error : error.message})
    }
})
/**
 * blogRoutes
 * DELETE REQUEST
 * DELETES A BLOG BY ID
 */
 router.delete("/:id",(req,res) => {
    res.json({message : "DELETE REQUEST"})
})
/**
 * blogRoutes
 * PUT REQUEST
 * UPDATES A BLOG BY ID
 */
 router.put("/:id",(req,res) => {
    res.json({message : "PUT REQUEST"})
})

//module exports
module.exports = router