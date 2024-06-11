import Navbar from './components/navbar';
import Input from './components/input';
import { useState } from 'react';
import Alert from './components/Alert';





function App() {
  const [Mode, SetMode]=useState('light');
  const [Alert, SetAlert]=useState(null);

  const ShowAlert=(message,type)=>{
    SetAlert({
      msg: message,
      type: type
    })
  }

  const toggleFunction=()=>{
    if(Mode==='light'){
      SetMode('dark')
      ShowAlert('Dark Mode Enabled', 'Sucess');
    }else{
      SetMode('light');
      ShowAlert('Light Mode Enabled', 'Sucess');
    }
  }

  return (
    <>
    <Navbar mode={Mode} toggleFunction={toggleFunction}/>
    <Alert alert={Alert}/>
    <div className='container'>
      
      <Input  heading="Enter Text to Analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
