import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../auth/Firebase'
import { toast } from 'react-toastify'
const Login = () => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handellogin=async(e)=>{
      e.preventDefault()
      try {
        await signInWithEmailAndPassword(auth,email,password)
        window.location.href='/profile'
        console.log("Successful sign up")
         toast.success("Successfull login",{
            position:"top-center"
          })
      } catch (error) {
        console.log(error.message)
        toast.success(error.message,{
          position:"bottom-center"
         })
      }
    }

  return (
    <div >
      <form action="" className=' container col-6 ' onSubmit={handellogin}>
        <h1 className='text-center m-3'>Login</h1>
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
          <input type="email" className="form-control" id="examplemail" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" id="examplepass" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className=" d-flex justify-content-between ">
         <button className='btn btn-danger'>Login </button>
         <p className='m-2 '>New user Please <Link to='/signup' className='text-primary'>Signup</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login