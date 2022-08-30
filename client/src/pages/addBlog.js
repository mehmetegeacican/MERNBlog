import AddForm from "../components/Forms/AddForm";
import { postFetch } from "../services/requestServices";

const BASE_URL = "http://localhost:3000/";

const AddBlog = () => {
  const save = async (title, writer, body, pictureName) => {
    let newBlog = {
      title: title,
      author: writer,
      profilePicAddress: "http://localhost:4000/assets/" + pictureName,
      body: body,
    };

    let data = await postFetch("http://localhost:4000/api/v1/blogs", newBlog);
    console.log("NEW DATA", data);
    window.location.href = BASE_URL;
  };

  return (
    <div align="center">
      <div className="container">
        <hr />
        <section className="hero is-medium" align="center">
          <AddForm save={save} />
        </section>
      </div>
    </div>
  );
};

export default AddBlog;
