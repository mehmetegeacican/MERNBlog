import AddForm from "../components/Forms/AddForm";
import { postFetch } from "../services/requestServices";

const BASE_URL = "http://localhost:3000/";

const AddBlog = () => {
  const save = async (title, desc, body) => {
    let newBlog = {
      title: title,
      description: desc,
      body: body,
    };
    let data = await postFetch("http://localhost:4000/api/v1/blogs", newBlog);
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
