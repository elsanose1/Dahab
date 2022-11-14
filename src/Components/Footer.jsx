import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='logo-column'><span>D</span>ahab</div>
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