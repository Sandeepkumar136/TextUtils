import Navbar from './components/navbar'
import Input from './components/input'
import { useState } from "react";


function App() {
  return (
    <>
    const [text, setText]=useState('');

    <Navbar/>
    <div className='container'>
      <Input/>
      <button type="button" className="btn btn-primary" onClick={ToUppercase}>To Uppercase</button>
    </div>
    </>
  );
}

export default App;
