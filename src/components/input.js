import React from "react";
import { useState } from "react";


function Input(props){
  const [text, setText]=useState('');
  const [emails, setEmails]= useState([]);
  const DoOnChange=(event)=>{
    setText(event.target.value);

  };
  const clickInpButton=()=>{
    setText(text.toUpperCase());
  }
  const clickInpButtonLower=()=>{
    setText(text.toLowerCase())
  }
  const OnClickCLs=()=>{
    let text='';
    setText(text)
  }

  const extractEmails=(text)=>{
    const pattern=/[\w.-]+@[\w.-]+\.\w+/g;
    return text.match(pattern) || [];
  };

  const EmLExtact=()=>{
    const extdEmails=extractEmails(text);
    setEmails(extdEmails);
  }


    return (
     <>
     <div className="container">
     <h3>{props.heading}</h3>
    <div className="mb-3">
      <div className="mb-3">

      <textarea className="form-control" onChange={DoOnChange} name="form-control" value={text} id="MyBox" rows="8" ></textarea>
      </div>

      <button type="button" onClick={OnClickCLs} className="btn btn-primary mx-1">Clear text</button>

      <button type="button" onClick={clickInpButton} className="btn btn-primary mx-1">To Uppercase</button>

      <button type="button" onClick={clickInpButtonLower} className="btn btn-primary mx-1">To Lowercase</button>

      <button type="button" onClick={EmLExtact} className="btn btn-primary mx-1">Extact Email</button>
    </div>
     </div>
     <div className="container my-2">

      <h2>Your text summary</h2>


      <p> {text.split(" ").length} words and {text.length} characters</p>


      <p>{0.008 * text.split(" ").length} Minutes read</p>


        <h4>Extracted Emails:</h4>
        <ul className="list-group">
        {emails.map((email, index) => (
          <li key={index} className="list-group-item">{email}</li>
        ))}
      </ul>


      <h2>
        Preview
      </h2>


      <p>{text}</p>

     </div>
     </>
      );
}
export default Input;