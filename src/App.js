import React, { Profiler } from 'react'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './Pages/Home';
import LoadBlog from './Pages/LoadBlog';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';



export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/explore" element={<Explore/>}/>
          <Route exact path="/blog" element={<LoadBlog/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
  </Router>
  )
}
