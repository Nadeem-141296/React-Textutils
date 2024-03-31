import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
       msg:message,
      type:type
    })   
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  const toggelMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Enabled","success" );
      document.title="Textutils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light  Mode Enabled","success" );
      document.title="Textutils - Dark Light";
    }
  }
  return (
<>
<div>
<Navbar title="Textutils"  mode={mode} toggelMode={toggelMode}/>
<Alert alert={alert}/>
<TextForm
  showAlert={showAlert}
  heading="Enter the text to analyze"
  mode={mode}
 />

{/* <About /> */}
</div>

</>
  );
}

export default App;
