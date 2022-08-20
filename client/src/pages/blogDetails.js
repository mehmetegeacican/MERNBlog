import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../services/requestServices";

const BlogDetails = () => {
  //USE PARAMS
  let params = useParams();
  //STATE VAR
  let [data, setData] = useState({});
  let img = "https://picsum.photos/800/600/?random";
  //DATA FETCH
  const fetchBlog = async () => {
    const fetched = await getFetch(
      "http://localhost:4000/api/v1/blogs/" + params.id
    );
    setData(fetched);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <section>
      <section className="hero">
        <div className="hero-body py-2">
          <div className="container">
            <hr />
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="column post-img">
                  <img
                    src={img}
                    alt="blog-post"
                    style={{ borderRadius: "4.5rem" }}
                  />
                </div>
              </div>
            </div>
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{data.createdAt}</h2>
                    <h1 className="title">{data.title}</h1>
                    <p>{data.body}</p>
                    <br />
                    <p
                      className="button is-link is-outlined"
                      onClick={() => window.history.back()}
                    >
                      Return to Blogs{" "}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};
export default BlogDetails;
