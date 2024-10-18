import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
import {
  
  Routes,
  Route,

} from "react-router-dom";
import Update from './CRUD/Update';
import Home from './CRUD/Home';
import ShowData from './CRUD/ShowData';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<ShowData/>}/>
      <Route path='/home' element={<Home/>}/>
       <Route path='/update/:id' element={<Update/>}/>
     </Routes>
    </>
  )
}

export default App
