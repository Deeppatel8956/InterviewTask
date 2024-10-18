import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function Axioshome(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
  const datates={
    name:name,
    email:email,
    phone:phone,
    country:country
  }
    function Postshow(){
        axios.post('http://localhost:3000/details',datates)
        
    }
   
    return (
        <div className='container mt-1'>
             <form onSubmit={Postshow}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control"   onChange={(e)=>setName(e.target.value)}  />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control"   onChange={(e)=>setEmail(e.target.value)}  />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="number" className="form-control"  onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                <input type="text" className="form-control"   onChange={(e)=>setCountry(e.target.value)}  />

                            </div>

                            <button type="button" className="btn btn-primary" >Submit</button>
                        </form>

        </div>
    );
}

export default Axioshome;