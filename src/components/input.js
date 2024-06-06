import React from "react";

function Input(props){
    return (

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label" >Enter Text to Analyze</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={props.value}></textarea>
    </div>
      );
}
export default Input;