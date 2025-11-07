import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null); 
  const showAlert = (message,type) => {
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
      setAlert(null)
      },1500)
  }
  const toggleMode = () => {
    console.log(mode);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", 'success');
      document.title = 'TextUtils - Dark Mode';
      /*setInterval(()=>{
        document.title = 'TextUtils is Amazing Mode';
      },2000);
      setInterval(()=>{
        document.title = 'Install TextUtils Now';
      },3000);*/
    }else{
      setMode('light');
       document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", 'success');
        document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>  
  <Router> 
 <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className='container my-3'>
  <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
  </Routes> 
 </div>
 </Router> 
  </>
  );
}

export default App; 
