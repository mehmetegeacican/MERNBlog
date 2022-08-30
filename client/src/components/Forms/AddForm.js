import { useState } from "react";

const AddForm = ({ save }) => {
  //HOOKS
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [pic, setPic] = useState({});
  let [picName,setPicName] = useState("");

  const handleChangeTitle = (e) => {
    e.preventDefault();
    //console.log("Title",e.target.value);
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    e.preventDefault();
    //console.log("Desc",e.target.value);
    setDesc(e.target.value);
  };

  const handleChangeBody = (e) => {
    e.preventDefault();
    //console.log("Body",e.target.value);
    setBody(e.target.value);
  };

  const handleFileChange = (e) => {
    setPic(e.target.files[0]);
    setPicName(e.target.files[0].name);
  };


  const uploadAndSave = (title,desc,body,pic) => {
    let formData = new FormData();
    formData.append("image",pic)
    //UPLOAD THE PICTURE
    fetch("http://localhost:4000/uploads",{
      method:"post",
      body:formData
    }).then(() => {
      save(title,desc,body,pic);
    })
  }

  return (
    <section>
      <div className="field">
        <label className="label" style={{ fontFamily: "cursive" }}>
          Title
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Enter your Blog's title"
            onChange={handleChangeTitle}
            style={{ borderRadius: "3rem" }}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" style={{ fontFamily: "cursive" }}>
          Author
        </label>
        <div className="control centered">
          <input
            className="input"
            type="text"
            placeholder="Enter your Blog's Description"
            onChange={handleChangeDesc}
            style={{ borderRadius: "3rem" }}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" style={{ fontFamily: "cursive" }}>
          Picture
        </label>
        <div className="container">
          <form className="form" action="/uploads" method="post">
            <div className="file has-name">
              <label className="file-label">
                <input className="file-input" type="file" name="image" onChange={handleFileChange} ></input>
                <span className="file-cta">
                  <span className="file-label">Choose a file…</span>
                </span>
                <span className="file-name">
                  {picName}
                </span>
              </label>
            </div>
            
          </form>
        </div>
      </div>

      <div className="field">
        <label className="label" style={{ fontFamily: "sans-serif" }}>
          Body
        </label>

        <div className="control">
          <textarea
            className="textarea"
            placeholder="Enter your Blog here"
            rows={15}
            onChange={handleChangeBody}
            style={{ borderRadius: "1.8rem" }}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                onClick={() => uploadAndSave(title,desc,body,pic)}
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddForm;
