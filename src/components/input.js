import React, { useRef } from "react";
import { useState } from "react";


function Input(props){
  const [text, setText]=useState('');
  const [emails, setEmails]= useState([]);
  const [paragraphCount, setParagraphCount]=useState(0);
  const ImpRef=useRef(null);
  

  const CountPeragraph=(text)=>{
    const paragraphs = text.split(/\n+/).filter(para => para.trim().length > 0);
    setParagraphCount(paragraphs.length);
  }


  const DoOnChange=(event)=>{
    setText(event.target.value);
    CountPeragraph(text);

  };

  const clickInpButton=()=>{
    setText(text.toUpperCase());
  };

  const clickInpButtonLower=()=>{
    setText(text.toLowerCase())
  };

  const OnClickCLs=()=>{
    let text='';
    setText(text)
  };

  const extractEmails=(text)=>{
    const pattern=/[\w.-]+@[\w.-]+\.\w+/g;
    return text.match(pattern) || [];
  };

  const EmLExtact=()=>{
    const extdEmails=extractEmails(text);
    setEmails(extdEmails);
  };


  const hSave=()=>{
    const blab=new Blob([text], {type: 'text/plain;charset=utf-8'});
    const url=URL.createObjectURL(blab);

    const link =document.createElement('a');
    link.href=url;

    link.setAttribute('download', 'Document.txt');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }


  const CopyText=()=>{
    if(ImpRef.current){
      navigator.clipboard.writeText(ImpRef.current.value)
      .then(()=>{
        alert("Text Copied to clipboard!");
      }).catch((err)=>{
        console.error("Failed to copy text:", err)
      });
    }

  }


    return (
     <>
     <div className="container">
     <h3>{props.heading}</h3>
    <div className="mb-3">
      <div className="mb-3">

      <textarea className="form-control" onChange={DoOnChange} ref={ImpRef} name="form-control" value={text} id="MyBox" rows="8" ></textarea>
      </div>

      <button type="button" onClick={OnClickCLs} className="btn btn-primary mx-1">Clear text</button>

      <button type="button" onClick={clickInpButton} className="btn btn-primary mx-1">To Uppercase</button>

      <button type="button" onClick={clickInpButtonLower} className="btn btn-primary mx-1">To Lowercase</button>

      <button type="button" onClick={EmLExtact} className="btn btn-primary mx-1">Extact Email</button>

      <button type="button" onClick={hSave} className="btn btn-primary mx-1">Save</button>

      <button type="button" onClick={CopyText} className="btn btn-primary mx-1">Copy</button>

    </div>
     </div>
     <div className="container my-2">

      <h2>Your text summary</h2>


      <p> {text.split(" ").length-1} words and {text.length} characters</p>

      <p>Number of Paragraphs {paragraphCount}</p>

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