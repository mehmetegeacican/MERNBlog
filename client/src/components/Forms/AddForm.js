import { useState } from "react";

const AddForm = ({save}) => {
  const aboutList = ["Web Dev", "Mobile Dev"];
  //HOOKS
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [body,setBody] = useState("");


  const handleChangeTitle = (e) => {
    e.preventDefault();
    //console.log("Title",e.target.value);
    setTitle(e.target.value);
  }

  const handleChangeDesc = (e) => {
    e.preventDefault();
    //console.log("Desc",e.target.value);
    setDesc(e.target.value);
  }

  const handleChangeBody = (e) => {
    e.preventDefault();
    //console.log("Body",e.target.value);
    setBody(e.target.value);
  }


  return (
    <section>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label" style={{"fontFamily":"cursive"}} >Title</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your Blog's title"
                onChange={handleChangeTitle}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={{"fontFamily":"cursive"}}>Description</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter your Blog's Description"
                onChange={handleChangeDesc}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={{"fontFamily":"cursive"}}>Title is about</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  {aboutList.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" style={{"fontFamily":"sans-serif"}}>Body</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Enter your Blog here"
                rows = {15}
                onChange={handleChangeBody}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={() => save(title,desc,body)}>Create</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddForm;
