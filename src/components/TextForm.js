import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertToupper = () => {
    setText("New text entered");

    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case","success")
    
  };

  const convertToLower=()=>{
      setText(text.toLowerCase());
      props.showAlert("Converted to lower case","success")
  }
  const clearText=()=>{
    setText('')
    props.showAlert("Text Cleared","success")
  }

  const copyText=()=>{
   

    
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard ","success")

  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h4>{props.heading}</h4>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color: props.mode==='dark' ? 'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={convertToupper}>
          Convert to upper case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={convertToLower}>
          Convert to lower case
        </button>

        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Clear text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy Text
        </button>
      </div>

      <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
          <h2>Preview</h2>
          {text.length>0?text:"Nothing to preview" }
      </div>
    </>
  );
}
