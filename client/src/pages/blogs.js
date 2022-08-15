import { useEffect, useState } from "react";
import BlogPost from "../components/BlogPost";
import { deleteFetch, getFetch } from "../services/requestServices";
import DeleteModal from "../components/Modals/DeleteModal";

const Blogs = () => {
  //Hooks
  //THIS STATE VAR HOLDS ALL OF THE BLOGS
  let [blogs, setBlogs] = useState(null);
  //THIS STATE VAR HOLDS ONLY ONE BLOG
  let [filteredBlogs, setFilteredBlogs] = useState(blogs);
  //HOOK FOR DELETE MODAL
  let [deleteModal, setDeleteModal] = useState(null);

  const deleteData = async (id) => {
    const data = await deleteFetch("http://localhost:4000/api/v1/blogs", id);
    console.log("DELETED ", data);
    closeDeleteModal();
    fetchBlogs();
  };
  /**
   * THIS FUNCTION IS FOR OPENING THE DELETE MODAL
   * @param {*long} id THE ID OF THE DATA TO BE DELETED
   */
  const openDeleteModal = (id) => {
    setDeleteModal(
      <DeleteModal data={id} delete={deleteData} close={closeDeleteModal} />
    );
  };
  /**
   * THIS FUNCTION IS FOR CLOSING THE DELETE MODAL
   */
  const closeDeleteModal = () => {
    setDeleteModal(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFilteredBlogs(
      blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(e.target.value);
      })
    );
  };
  const fetchBlogs = async () => {
    // REFACTOR -- USE ENV FOR LOCALHOST
    const data = await getFetch("http://localhost:4000/api/v1/blogs");
    setBlogs(data);
    setFilteredBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div align="center">
      <div className="container">
        <hr />
        <section className="hero is-medium">
          <div className="hero is-medium has-text-centered">
            <h5
              className="title is-2"
              style={{ color: "turquoise", fontFamily: "Brush Script MT" }}
            >
              MERNBlog
            </h5>
            <div
              id="hero-input-group"
              className="field has-addons has-addons-centered"
            >
              <input
                className="input is-medium"
                type="text"
                placeholder="Search The Blogs that you want to find (Search by title)"
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <hr />
        <div className="columns is-multiline">
          {blogs &&
            filteredBlogs.map((blog) => {
              let anImage = "https://picsum.photos/800/600/?random";
              return (
                <div
                  className="column is-one-third"
                  key={blog._id}
                  style={{ fontFamily: "cursive" }}
                >
                  <BlogPost
                    id={blog._id}
                    title={blog.title}
                    desc={blog.description}
                    body={blog.body}
                    image={anImage}
                    createdAt={blog.createdAt}
                    openDeleteModal={() => openDeleteModal(blog._id)}
                  />

                  <hr style={{ backgroundColor: "turquoise" }} />
                </div>
              );
            })}
        </div>
      </div>
      {deleteModal}
    </div>
  );
};

export default Blogs;
