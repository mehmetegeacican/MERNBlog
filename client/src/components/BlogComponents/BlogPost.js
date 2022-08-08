
const BlogPost = (props) => {
    return(
        <article className="columns is-multiline">
            <div className="column post-img" style = {{"border-radius":"4px;"}}>
                <img src={props.image} alt="blog-post" style={{"border-radius":"5px;"}}/>
            </div>
            <div className="column is-12 featured-content ">
            <h3 className="heading post-category">{props.createdAt}</h3>
            <h1 className="title post-title" style ={{"color":"darkred"}}>{props.title}</h1>
            <p className="post-excerpt">{props.desc} </p>
            <br/>
            
            <p className="button is-primary is-outlined mr-1">Read More</p>
            <p className="button is-secondary is-outlined mr-1 ">Edit</p>
            <p className="button is-danger is-outlined mr-1"> Delete</p>
            
            </div>
      </article>           
    )
}

export default BlogPost;