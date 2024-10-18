import axios from 'axios';
import React, { useEffect, useState } from 'react';
const baseURl='http://localhost:3000/details'
function Axiosget(props) {
    let [post,setPost]=useState(null);
    useEffect(()=>{
        axios.get(baseURl).then((responce)=>{
            console.log(responce)
            setPost(responce.data)
        })
    },[])
    if (!post) return null
    
    return (
        <div>
            <h1></h1>
            {post.map((ele)=>{
                return<>
                <tr>
                <td>{ele.name}</td>
                </tr>
                
                </>
            })}
        </div>
    );
}

export default Axiosget;