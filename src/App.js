import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter , 
  Routes,
  Route,
  
  }from "react-router-dom";
import Contact from './components/Contact';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,   // naam same bhi rkh skta ha 
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },900);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor= '#28282B';
      showalert("Dark mode has been enable","success")
      document.title = "TextMate - Dark mode";
    }
    else{
      setmode('light');
       document.body.style.backgroundColor= 'white';
       showalert("Light mode has been enable","success")
       document.title = "TextMate - Light mode";
    }
  };
  return (
    <>
    <BrowserRouter basename='/TextMate' >
    <Navbar title="TextMate" homeabout="About" action="burger khalo ji" mode={mode} togglemode={togglemode} />
    <Alert  alert={alert}/>

      
      <Routes >
    
          <Route exact path = "/about" element = {<About mode={mode} />} />
          <Route  exact path = "/" element = {<Textform  heading = "Try TextMate - Word counter : Character counter : Convert Uppercase to Lowercase And Lowercase to Uppercase" mode={mode} showalert = {showalert}/>} />
          <Route exact path = "/contact" element = {<Contact mode={mode} showalert = {showalert} />} />
    
   
   </Routes>

</BrowserRouter>
    </>
  );
}


export default App;
