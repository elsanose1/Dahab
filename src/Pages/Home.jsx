import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <>
        <Navbar/>
        <section className='landing-img'>
        <video  autoPlay loop muted playsInline >
            <source src="./images/2.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
            <h1>Welcome To <span>Egypt</span></h1>
            <p>Heaven On Earth</p>
        </section>
        <section className='places-seection'>
            <h1 className='title'>Touristic Places</h1>
          <div className="container">
              <div className="cards-container">
                <div className="card">
                  <img src="./images/1.jpg" alt="" />
                  <div className="card-info">
                    <h2>Religious Tourism</h2>
                    <hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta architecto eligendi blanditiis provident, totam obcaecati debitis deleniti quis. In quos dicta harum accusantium, consequuntur ipsa voluptatem eum dolores id a?</p>
                    <Link to='/tp'>
                    <button>Discover</button>  
                    </Link>                 
                  </div>
                </div>
                <div className="card">
                  <img src="./images/2.jpg" alt="" />
                  <div className="card-info">
                    <h2>Cultural Tourism</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nemo aliquid, amet ad alias, maiores facere mollitia voluptatem est labore vitae facilis! Porro sapiente sed mollitia unde iure pariatur nisi.</p>
                    <Link to='/tp'>
                    <button>Discover</button>  
                    </Link>                   
                  </div>
                </div>
                <div className="card">
                  <img src="./images/3.jpg" alt="" />
                  <div className="card-info">
                    <h2>Recreational Tourism</h2>
                    <hr />
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis, ipsum quo ut, cumque nobis facere amet veniam nisi explicabo expedita beatae voluptate modi eos totam debitis. Accusamus, laborum voluptatum.</p>
                      <Link to='/tp'>
                      <button>Discover</button>  
                      </Link>                 
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className='contactus-section'>
          <h1 className='title'>HAVE SOME QUESTIONS?</h1>
          <div className='cont-cont'>
            <div className='contact-svg'>
              <img src="./images/mail.png" alt="" srcset="" />
            </div>
            <form className="contact-form">
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
              <input type="email" placeholder="What's your email" />
              <textarea placeholder='Your question...'></textarea>
              <button>SEND MESSAGE</button>
            </form>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Home