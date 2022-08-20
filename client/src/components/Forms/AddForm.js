import { useState } from "react";

const AddForm = ({ save }) => {
  const aboutList = ["Web Dev", "Mobile Dev"];
  //HOOKS
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");

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
            style = {{"borderRadius":"3rem"}}
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
            style = {{"borderRadius":"3rem"}}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" style={{ fontFamily: "cursive" }}>
          Title is about
        </label>

        <div className="container">
          <div className="select">
            <select>
              {aboutList.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </div>
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
            style = {{"borderRadius":"1.8rem"}}
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
                onClick={() => save(title, desc, body)}
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
