import React from 'react'
import Home from './Components/Home'
import {Routes, Route } from "react-router-dom";

import Error from './Components/Error';

const App = () => {
  return (
  
    <Routes>
         
      <Route path='/' element={<Home/>}/>
  
      <Route path='*' element={<Error/>}/>
    </Routes>
  
  )
}

export default App