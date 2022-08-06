import { useEffect, useState } from "react";



const Blogs = () => {

    //Hooks
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch('/api/v1/blogs')
            const json = await res.json();

            if(res.ok){
                setBlogs(json);
            }
        }

        fetchBlogs();
    }, [])

    return(
        <div align="center" >
            <h2> Blogs </h2>
            <hr/>
            <ul>
                {blogs && blogs.map((blog) => (
                    <li key={blog.title}> {blog.title} </li>
                ))}
            </ul>
        </div>
    )
}

export default Blogs;