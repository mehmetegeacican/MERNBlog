import { useEffect, useState } from "react";
import BlogPost from "../components/BlogComponents/BlogPost";
import SearchBar from "../components/searchbar/searchBar";


const Blogs = () => {

    //Hooks
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            // REFACTOR -- USE ENV FOR LOCALHOST
            const res = await fetch('http://localhost:4000/api/v1/blogs')
            const json = await res.json();

            if(res.ok){
                setBlogs(json);
            }
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
                        <SearchBar/>
                    </div>
                </section>
                <hr/>
                <div className="columns is-multiline">

                    {blogs && blogs.map((blog) => {
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