import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const handleBlueClick=()=>{
    document.body.style.backgroundColor='#02023e';
    document.body.style.color='black';
  }
  const handleGreyClick=()=>{
    document.body.style.backgroundColor='#545454';

  }
  const handleGreenClick=()=>{
    document.body.style.backgroundColor='#104607';    

  }
  const handleRedClick=()=>{
    document.body.style.backgroundColor='rgb(114 3 3)';

  }
  const handleYellowClick=()=>{
    document.body.style.backgroundColor='#9d9d09';

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Pricing</a>
        </li> */}
        
      </ul>
    </div>
    <button type="button" className="btn btn-outline-primary" onClick={handleBlueClick} >Blue</button>
    <button type="button" className="btn btn-outline-secondary" onClick={handleGreyClick}>Grey</button>
    <button type="button" className="btn btn-outline-success" onClick={handleGreenClick}>Green</button>
    <button type="button" className="btn btn-outline-danger" onClick={handleRedClick}>Red</button>
    <button type="button" className="btn btn-outline-warning" onClick={handleYellowClick}>yellow</button>   
    
  </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
        <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
  </div>
</nav>
  )
}
Navbar.propTypes= {title:  PropTypes.string}
Navbar.defaultProps= {
  title: 'add title'
}
