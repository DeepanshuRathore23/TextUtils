import React from   'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'


function App(props) {  
  const [mode, setMode] = useState('light');//wheather dark mode is enabled or not  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#062232';      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';      
    }
  }  
  return (
    <div>        
      <Navbar title={'textutils'} mode={mode} toggleMode={toggleMode}/>      
      {/* <BrowserRouter> */}     
        {/* <Routes> */}          
          {/* < Route exact path="/"element= {} />  */}
        {/* </Routes> */}        
      {/* </BrowserRouter> */}
      <TextForm heading= "Try TextUtils- Word Counter, Character Counter"  mode={mode}/>        
    </div>

   )
}
App.propTypes = {}
export default App
