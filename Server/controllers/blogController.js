const Blogs = require("../models/blogModel");
const mongoose = require('mongoose');
/**
 * GET ALL BLOGS
 * GETS ALL DOCS FROM THE DB
 */
const getBlogs = async (req,res) => {
    const blogs = await Blogs.find({}).sort({createdAt: -1});
    res.status(200).json(blogs);
}
/**
 * GET A SPECIFIC BLOG
 */
const getABlog = async (req,res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({err : "No such id value"}) 

    const blog = await Blogs.findById(id);

    if(!blog){
        res.status(404).json({error: "There is no blog with that id!!!"});
    }

    res.status(200).json(blog);
}
/**
 * POST BLOG
 * ADDS THE DOC TO THE DB
 */
const postBlog = async (req,res) => {
    const {title,description,body} = req.body;
    try{
        const blogM = await Blogs.create({title,description,body});
        console.log(blogM);
        res.status(200).json(blogM);
    }
    catch(err){
        res.status(400).json({err : err.message})
    }
}
/**
 * PUT BLOG
 */
const putBlog = async (req,res) => {
    //id
    const { id } = req.params;
    //CHECK IF ID IS VALID
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({err : "No such id value"})
    //UPDATED BLOG
    const updatedBlog = await Blogs.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!updatedBlog){
        res.status(400).json({err:"No such blog"});
    }
    res.status(200).json(updatedBlog);
}

/**
 * DELETE BLOG
 */
const deleteBlog = async (req,res) => {
    //id
    const { id } = req.params;
    //CHECK IF ID IS VALID
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({err : "No such id value"})

    const deletedBlog = await Blogs.findByIdAndDelete(id);
    //const deletedBlog = await Blogs.findOneAndDelete({_id:id})

    if(!deletedBlog){
        res.status(404).json({err:"No such blog"})
    }

    res.status(200).json(deletedBlog);

}

module.exports = {
    getBlogs,
    getABlog,
    postBlog,
    deleteBlog,
    putBlog
}