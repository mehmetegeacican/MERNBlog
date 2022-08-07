
const BlogPost = (props) => {
    return(
        <section className="blog-posts">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="column is-12 post">
                        <article className="columns featured">
                                <div className="column is-7 post-img ">
                                    <img src="https://cdn.emk.dev/templates/featured-image.png" alt=""/>
                                </div>
                                <div className="column is-5 featured-content va">
                                <div>
                                    <h3 className="heading post-category">{props.desc}</h3>
                                    <h1 className="title post-title">{props.title}</h1>
                                    <p className="post-excerpt">{props.body}</p>
                                    <br/>
                                    <p className="button is-primary">Read More</p>
                                </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </section>
    )
}

export default BlogPost;