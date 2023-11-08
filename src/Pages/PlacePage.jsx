import React from 'react'
import { useLocation } from 'react-router-dom'
import "./PlacePage.css"
import data from '../data/places.json';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const PlacePage = () => {
    const id = useLocation().pathname.split('/')[2]
    const item = data.find(el => el.id == id)
    console.log(item);

  return (
        <>
            <Navbar notHome={true}/>
            <div className="Place-Container">
                <div className="imgContainer">
                    <img src={`${item.img}`} alt="" />
                </div>
                <div className="Place-Info">
                    <h1>{item.name}</h1>
                    <hr />
                    <p>{item.details}</p>
                    <hr />
                    <div className="btn-Container">
                        <button>Book</button>
                        <button>Location</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default PlacePage