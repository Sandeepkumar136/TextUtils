import Navbar from './components/navbar'
import Input from './components/input'


function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      
      <Input  heading="Enter Text to Analyze"/>
    </div>
    </>
  );
}

export default App;
