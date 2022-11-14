import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import './NotFound.css'
const NotFound = () => {
  return (
    <>
      <Navbar notHome={true}/>
      <div className="notFound">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>This page you're looking for does not seem to exist</p>
      </div>
      <Footer/>
    </>
  )
}

export default NotFound