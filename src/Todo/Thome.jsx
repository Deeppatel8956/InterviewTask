import { useState } from "react";
import React  from 'react';

function Thome(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')

    const adduser=(e)=>{
        e.preventDefault();
        if(name&&phone&&country){
            fetch('http://localhost:3000/details',{
                method:"POST",
                body:JSON.stringify({
                    name,
                    phone,
                    country
                }),headers:{
                       "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((res)=>res.json)
             .then((responc)=>console.log(responc))
        }
    }
    return (
        <div className="container">
            <div className="mb-3 ">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)}  />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                <input type="text" className="form-control" id="country" value={country} onChange={(e)=>setCountry(e.target.value)}  />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                            <div>
                            <button type="button" className="btn btn-primary" onClick={adduser}>Submit</button>
                            </div>
        </div>
    );
}

export default Thome;