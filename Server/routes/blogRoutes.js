const express = require("express");
const {
  getBlogs,
  getABlog,
  postBlog,
  deleteBlog,
  putBlog,
} = require("../controllers/blogController");
const router = express.Router();

//GET REQUEST, GET ALL BLOGS
router.get("/", getBlogs);
//GET REQUEST,GET A SPECIFIC BLOG
router.get("/:id", getABlog);
//POST REQUEST, POST BLOG
router.post("/", postBlog);
//DELETE REQUEST, DELETE BLOG BY ID
router.delete("/:id", deleteBlog);
//UPDATE REQUESTİ UPDATES BLOG BY ID AND REQ BODY
router.put("/:id", putBlog);

//module exports
module.exports = router;
