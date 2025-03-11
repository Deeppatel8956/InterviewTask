import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes,Route,  BrowserRouter as Router,} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Signupcopy from './components/Signupcopy'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router>
     <Routes >
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      
     </Routes>
     <ToastContainer/>
     </Router> */}
     <Signupcopy/>
    </>
  )
}

export default App
