import { useEffect, useState } from "react";
import BlogPost from "../components/BlogComponents/BlogPost";


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
            <hr/>
            <ul>
                {blogs && blogs.map((blog) => (
                    <li key={blog.title}> <BlogPost title={blog.title} desc = {blog.description} body = {blog.body}/> </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs;