import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Trips = () => {
  return (
    <>
    <Navbar notHome={true}/>
    <div className="notFound">
      <h1>Comming Soon....</h1>
      <h3>This page you're looking for does not seem to exist for now</h3>
      <p></p>
    </div>
    <Footer/>
  </>
  )
}

export default Trips