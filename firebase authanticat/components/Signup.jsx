import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../auth/Firebase"
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

  const redirect = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const handelregister = async (e) => {



    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      console.log(user)
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: email,
          firstname: firstname,
          lastname: lastname
        })
        redirect('/')
      }
      console.log("Successful sign up")
      toast.success("Successfull sign up", {
        position: "top-center"
      })
    } catch (error) {
      console.log(error.message)
      toast.success(error.message, {
        position: "bottom-center"
      })
    }
  }

  return (
    <div>
      <form action="" className=' container col-6 ' onSubmit={handelregister}>
        <h1 className=' text-center m-3'>Signup</h1>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">FirstName</label>
          <input type="text" className="form-control" id="exampleFname" placeholder="Enter firstname" onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">LasrName</label>
          <input type="text" className="form-control" id="examplelname" placeholder="Enter Lastname" onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" id="examplepass" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
          <input type="email" className="form-control" id="examplemail" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className=" d-flex justify-content-between ">
          <button className='btn btn-danger'>Submit </button>
          <p className='m-2 '>ALL ready <Link to='/' className='  text-primary'>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup