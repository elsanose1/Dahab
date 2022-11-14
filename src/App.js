import React from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Places from './Pages/Places';
import NotFound from './Pages/NotFound';
import Trips from './Pages/Trips';

const App = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tp' element={<Places/>}/>
        <Route path='/trips' element={<Trips/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App