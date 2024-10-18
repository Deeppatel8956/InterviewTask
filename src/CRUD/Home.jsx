import React, { useState } from 'react';
import { PostApiAction } from '../Actions/index';
import { useDispatch } from 'react-redux';
import app from '../Firebase/Firebase';

import {getDatabase ,ref ,set} from 'firebase/database'

function Home(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')

    const Namehandlr = (e) => {
        setName(e.target.value);
    }
    const Emailhandlr = (e) => {
        setEmail(e.target.value);
    }
    const Phone = (e) => {
        setPhone(e.target.value);
    }
    const Countryhandlr = (e) => {
        setCountry(e.target.value);
    }
    const dispatch=useDispatch()
    const clickhandel=(e)=>{
        
        const finaldata={
            name:name,
            email:email,
            phone:phone,
            country:country
        }
        dispatch(PostApiAction(finaldata))
    }


    return (
        <>
            <div className="container mt-3 mx-10">
                <div className="row">
                    <div className="col-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={Namehandlr} name='name' />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={Emailhandlr} name='email' />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleInputPassword1" onChange={Phone} name='phone'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={Countryhandlr} name='country' />

                            </div>

                            <button type="button" className="btn btn-primary" onClick={(e)=>clickhandel(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;