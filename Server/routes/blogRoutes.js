const express = require('express');

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
router.post("/",(req,res) => {
    res.json({message : "POST REQUEST"})
})
/**
 * blogRoutes
 * POST REQUEST
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