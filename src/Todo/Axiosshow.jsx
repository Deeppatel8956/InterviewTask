import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Axiosshow(props) {
    const[user,setUser]=useState([]) 
    function showuser(){
      axios.get('http://localhost:3000/details')
      .then((res)=>setUser(res.data))
    }
    useEffect(()=>{
        showuser()
    },[])
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>country</th>
                </thead>
                <tbody>
                    {user.map((ele)=>{
                        return(
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Axiosshow;