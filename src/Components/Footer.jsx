import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const linkStyle = { 
  textDecoration: "none",
  color: "white",
}

const Footer = () => {
  return (
    <footer className='footer'>
        <Link to='/' style={linkStyle}>
          <div className='logo-column'><span>D</span>ahab</div>
        </Link>
        <div className="usful-links">
            <h3>Useful Links</h3>
            <ul>
                <li>Religious</li>
                <li>Cultural</li>
                <li>Recreational</li>
                <li>Our Trips</li>
                <li>Most Visted</li>
                <li>Best Deals</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer