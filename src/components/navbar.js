import { useState } from "react";
// import About from "./About";



export default function Navbar(props){

  const [SearchItem, setSearchItem]=useState('');

  const handleSearchFunc=(e)=>{
    setSearchItem(e.target.value)
  };

  const handleSearch=()=>{
    if(SearchItem){
      window.find(SearchItem);
    }
  }



    return(
    <nav className={`navbar navbar-expand-lg bg-body-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Text Utils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
              </li>
            </ul>
          <div className="form-check form-switch mx-2">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleFunction} id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" value={SearchItem} onChange={handleSearchFunc}aria-label="Search"/>
              <button className="btn btn-primary" onClick={handleSearch} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      );
}