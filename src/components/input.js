import React from "react";
import { useState } from "react";


function Input(props){
  const [text, setText]=useState('');
  const DoOnChange=(event)=>{
    setText(event.target.value);

  };
  const clickInpButton=()=>{
    setText(text.toUpperCase());
  }
  

    return (
     <>
    <h3>{props.heading}</h3>
    <div className="mb-3">
      <div className="mb-3">
      <textarea className="form-control" onChange={DoOnChange} name="form-control" value={text} id="MyBox" rows="8" ></textarea>
      </div>
      <button type="button" onClick={clickInpButton} className="btn btn-primary">To Uppercase</button>
    </div>
     </>
      );
}
export default Input;