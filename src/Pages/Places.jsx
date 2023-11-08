import React, { useEffect, useState } from 'react'
import './Places.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import data from '../data/places.json';
import { Link } from 'react-router-dom';


const Places = () => {
    window.scroll(0, 0);
    const [filter , setFilter] = useState("all")
    const [fData , setFData] = useState([])
    const [search , setSearch] = useState('')

    useEffect( ()=>{
        if (filter === "all" && search.length === 0) {
            setFData(data)
        }
    },[ fData])

    const changeData = (value)=>{
        if (value == "all") {
            setFData(data)
        }else{
            const temp = data.filter( e => e.cat === value);
            setFData(temp);
        }
        setFilter(value);
    }
    const clickHandler = (value)=>{
        const btns = document.querySelectorAll('.filter-button')
        btns.forEach( element =>{
            element.classList.remove("active")
        })
        document.querySelector(`#${value}`).classList.add("active")
        changeData(value)
    }

    const searchHandler = (e)=>{
        setSearch(e.target.value)
        clickHandler("all")
        if (search.length > 0) {
            const tempData = data.filter((tour) => {
                return tour.name.match(search);
            });
            setFData(tempData);
        }else{
            setFData(data);
        }
        
    }


  return (
    <>
        <Navbar notHome={true}/>
        <section className='places-section'>
        <div className="container">
            <h1 className='title'>Touristic Places</h1>
            <div className="filter">
                <button id='all' onClick={ e => clickHandler("all")} className="filter-button active">All</button>
                <button id='reg' onClick={ e => clickHandler("reg")} className="filter-button">Religious</button>
                <button id='cul' onClick={ e => clickHandler("cul")} className="filter-button">Cultural</button>
                <button id='rec' onClick={ e => clickHandler("rec")} className="filter-button">Recreational</button>
                <input className='searchBar' type="text" placeholder="Search here" onChange={searchHandler} value={search}  />
            </div>
            <hr />
            <div className="placeCard-container">

            {
               fData.map( (element , index) =><div key={index} className="card">
                  <img src={element.img} alt="" />
                  <div className="card-info">
                    <h2>{element.name}</h2>
                    <hr />
                    <p>{element.details}</p>
                    <Link to={`./${element.id}`}>
                        <button>Discover</button> 
                    </Link>                 
                  </div>
                </div>
                )}

            </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default Places