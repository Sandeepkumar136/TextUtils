import Navbar from './components/navbar';
import Input from './components/input';
import { useState } from 'react';
// import About from './components/About';





function App() {
  const [Mode, SetMode]=useState('light');

  const toggleFunction=()=>{
    if(Mode==='light'){
      SetMode('dark')
    }else{
      SetMode('light')
    }
  }

  return (
    <>
    <Navbar mode={Mode} toggleFunction={toggleFunction}/>
    <div className='container'>
      
      <Input  heading="Enter Text to Analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
