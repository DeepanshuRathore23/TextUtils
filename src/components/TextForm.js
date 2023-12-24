import { useState } from "react";
import React from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);        
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);       
    }
    const handleClearClick=()=>{
        let newText = "";
        setText(newText);                
    }
    const handleExtraSpaceClick=()=>{
        let newText =  text.replace(/\s+/g, ' ');
        setText(newText);
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text)
        // .then(() => console.log("Text copied to clipboard"))
        // .catch(error => console.error("Error copying text: ", error));
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }    
    
    return (
    <>
    <div className="container "style={{color:props.mode==='dark'?'white':'#062232'}} >  
        <h1>{props.heading} </h1>
        <form>
        <div className="form-group">        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#192434':'white',color:props.mode==='dark'?'white':'#062232'}} rows="8" id="comment"></textarea>
        </div>
        </form>        
        <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaceClick} >Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1"onClick={handleCopyClick} >Copy Text</button>
        <button className="btn btn-primary mx-1 my-1"onClick={handleClearClick} >Clear Text</button>

        

        </div>
    <div className='container'style={{color:props.mode==='dark'?'white':'#062232'}}>
        <h1>Text Smmary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to Preview'}</p>      

    </div>

    </>

  )
}
