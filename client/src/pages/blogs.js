import { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import { getFetch } from "../services/requestServices";





const Blogs = () => {

    //Hooks
    //THIS STATE VAR HOLDS ALL OF THE BLOGS
    let [blogs,setBlogs] = useState(null);
    //THIS STATE VAR HOLDS ONLY ONE BLOG
    let [filteredBlogs,setFilteredBlogs] = useState(blogs);

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setFilteredBlogs(blogs.filter((blog) => {
            return blog.title.toLowerCase().includes(e.target.value)
        }))
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            // REFACTOR -- USE ENV FOR LOCALHOST
            const data = await getFetch("http://localhost:4000/api/v1/blogs");
            setBlogs(data);
            setFilteredBlogs(data);
        }
        fetchBlogs();
    }, [])


    return(
        <div align="center" >
            <div className="container">
                <hr/>
                <section className="hero is-medium">
                    <div className="hero is-medium has-text-centered">
                        <h5 className="title is-2" style={{"color":"turquoise","fontFamily":"Brush Script MT"}}>MERNBlog</h5>
                        <div id="hero-input-group" className="field has-addons has-addons-centered">   
                            <input 
                            className="input is-medium" 
                            type="text" 
                            placeholder="Search The Blogs that you want to find (Search by title)"
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </section>
                <hr/>
                <div className="columns is-multiline">

                    {blogs && filteredBlogs.map((blog) => {
                        let anImage = "https://picsum.photos/800/600/?random";
                        return(
                        <div className="column is-one-third" key={blog._id} style={{"fontFamily":"cursive"}}>
                            <BlogPost title={blog.title} 
                            desc = {blog.description} 
                            body = {blog.body} 
                            image = {anImage} 
                            createdAt = {blog.createdAt}/>
                            <hr style={{"backgroundColor":"turquoise"}}/>
                        </div>
                    )})}

                </div>
            </div>
        </div>
    )
}

export default Blogs;