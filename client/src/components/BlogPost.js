const BlogPost = (props) => {
  return (
    <article className="columns is-multiline">
      <div className="column post-img">
        <img
          src={props.image}
          alt="blog-post"
          style={{ borderRadius: "4.5rem" }}
        />
      </div>
      <div className="column is-12 featured-content ">
        <h3 className="heading post-category">{props.createdAt}</h3>
        <h1 className="title post-title" style={{ color: "darkred" }}>
          {props.title}
        </h1>
        <p className="post-excerpt" style={{ fontStyle: "italic" }}>
          {" "}
          by {props.desc}{" "}
        </p>
        <br />

        <p className="button is-primary is-outlined mr-1">Read More</p>
        <p
          className="button is-secondary is-outlined mr-1 "
          onClick={() => props.openEditModal(props.id, props.blog)}
        >
          Edit
        </p>
        <p
          className="button is-danger is-outlined mr-1"
          onClick={() => props.openDeleteModal(props.id)}
        >
          {" "}
          Delete
        </p>
      </div>
    </article>
  );
};

export default BlogPost;
