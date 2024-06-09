import Navbar from './components/navbar';
import Input from './components/input';
// import About from './components/About';




function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      
      <Input  heading="Enter Text to Analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
