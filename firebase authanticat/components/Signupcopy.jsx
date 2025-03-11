// import React, { useState } from 'react'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth, db } from "../auth/Firebase"
// import { setDoc, doc } from 'firebase/firestore'
// import { toast } from 'react-toastify'
// // import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'
// import { redirect } from 'react-router-dom'
// const Signupcopy = () => {

//   // const redirect = useNavigate()
//   // const [email, setEmail] = useState('')
//   // const [password, setPassword] = useState('')
//   // const [firstname, setFirstname] = useState('')
//   // const [lastname, setLastname] = useState('')
//   const { register, handleSubmit } = useForm()

//   const handelregister = async (e) => {



//     // e.preventDefault()
//     try {
//       await createUserWithEmailAndPassword(auth, email, password)
//       const user = auth.currentUser
//       console.log(user)
//       if (user) {
//         await setDoc(doc(db, "User", user.uid), {
//           email: email,
//           firstname: firstname,
//           lastname: lastname
//         })
//         redirect('/')
//       }
//       console.log("Successful sign up")
//       toast.success("Successfull sign up", {
//         position: "top-center"
//       })
//     } catch (error) {
//       console.log(error.message)
//       toast.success(error.message, {
//         position: "bottom-center"
//       })
//     }
//   }

//   const onSubmited=(data)=>{
//     console.log(data)
//   }
//   return (
//     <div>
//       <form action="" className=' container col-6 ' onSubmit={handleSubmit(handelregister)}>
//         <h1 className=' text-center m-3'>Signup</h1>
//         <div className="mb-3 ">
//           <label htmlFor="exampleFormControlInput1" className="form-label">FirstName</label>
//           <input {...register("firstname")} className="form-control"  placeholder="Enter firstname"  />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">LasrName</label>
//           <input {...register("lastname")} className="form-control"  placeholder="Enter Lastname"  />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
//           <input {...register("Password")} className="form-control"  placeholder="Enter password"  />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Email </label>
//           <input {...register("email",{pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} className="form-control"  placeholder="Enter email"  />
//         </div>
              
//         <div className=" d-flex justify-content-between ">
//           <button className='btn btn-danger'>Submit </button>
//           {/* <p className='m-2 '>ALL ready <Link to='/' className='  text-primary'>Login</Link></p> */}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Signupcopy


import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from "../auth/Firebase"
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'

const Signupcopy = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  // const navigate = useNavigate()

  const handleRegister = async (data) => {
    const { email, password, firstname, lastname } = data
    console.log("Form Data:", data); // Debugging step to check if email and other data are correct

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      if (user) {
        // Create a document for the new user in Firestore
        console.log("Creating user in Firestore with email:", email); // Debugging step
        await setDoc(doc(db, "User", user.uid), {
          email: email,
          firstname: firstname,
          lastname: lastname
        })

        // Log the user and email to ensure they are correct
        console.log("User successfully created:", user.uid);

        toast.success("Successful sign up", {
          position: "top-center"
        })

        // Navigate to homepage after successful signup
        // navigate('/')
      }
    } catch (error) {
      console.error("Error during sign-up or Firestore write:", error.message) // More detailed error logging
      toast.error(error.message, {
        position: "bottom-center"
      })
    }
  }

  return (
    <div>
      <form className='container col-6' onSubmit={handleSubmit(handleRegister)}>
        <h1 className='text-center m-3'>Signup</h1>
        
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">FirstName</label>
          <input 
            id="firstname"
            {...register("firstname", { required: "First Name is required" })} 
            className="form-control" 
            placeholder="Enter firstname" 
          />
          {errors.firstname && <p className="text-danger">{errors.firstname.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">LastName</label>
          <input 
            id="lastname"
            {...register("lastname", { required: "Last Name is required" })} 
            className="form-control" 
            placeholder="Enter Lastname" 
          />
          {errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            id="password"
            type="password"
            {...register("password", { 
              required: "Password is required", 
              minLength: { value: 6, message: "Password must be at least 6 characters" } 
            })} 
            className="form-control" 
            placeholder="Enter password" 
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            id="email"
            type="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Invalid email format" } 
            })} 
            className="form-control" 
            placeholder="Enter email" 
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        <div className="d-flex justify-content-between">
          <button className='btn btn-danger' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signupcopy

