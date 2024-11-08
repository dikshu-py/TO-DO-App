import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main_layout from './Component/Main_layout'
import Add_Todo from './Component/Add_Todo'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Main_layout/>} />
        <Route path="/add" element={<Add_Todo/>} >
        
        
        </Route>
      </Routes>  
    
    </BrowserRouter>
   
  )
}

export default App
