import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css" 

const navStyle ={
  position: "relative",
  backgroundColor : "#424242"
}

const linkStyle = { 
  textDecoration: "none",
  color: "white",
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (window.scrollY >= 618) {
    document.querySelector("nav").classList.add("top")
  }else{
    document.querySelector("nav").classList.remove("top")
  }
}

const Navbar = ({notHome}) => {
  return (
    <nav style={notHome&&navStyle} className='navbar'>
        <div className="logo">
          <Link to='/' style={linkStyle}>
            <span>D</span>ahab
          </Link>
        </div>
        <ul className='mune '>
          <Link to='/' style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to='/tp' style={linkStyle}>
            <li>Touristic Places</li>
            </Link>
          <Link to='/trips' style={linkStyle}>
            <li>Trips</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar