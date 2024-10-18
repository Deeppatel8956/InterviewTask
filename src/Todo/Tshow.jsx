import { onValue } from 'firebase/database';
import React, { useEffect, useState } from 'react';

function Tshow(props) {
    const[post,setPost]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/details')
        .then((res)=>res.json())
        .then((rseponce)=>setPost(rseponce))
    },[])


    // Delete
    const Deleteuser=(id)=>{
       fetch(`http://localhost:3000/details/${id}`,{
        method:"DELETE"
       })
       .then((res)=>res.json())
       .then(()=>setPost((elements)=>{
        return elements.filter((item)=>item.id!==id)
       }))
    }


    // Update
    const Updateuser=(id)=>{
        const useres=post.find((itemes)=>itemes.id===id)
        fetch(`http://localhost:3000/details/${id}`,{
            method:"PUT",
            body:JSON.stringify(post),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then((res)=>res.json())
        .then((ele)=>console.log(ele))
    }
    const onchangehandel=(id,key,value)=>{
        setPost((eles)=>{
            return eles.map((elementes)=>elementes.id===id?{...elementes,[key]:value}:elementes)
        })
    }
    return (
        <div className='container'>
            {
                post.map((ele,ides)=>{
                    return<>
                    <ul key={ides}>
                        <li>{ele.name}</li>
                    </ul>
                  
                    <ul>
                        <li>{ele.phone}</li>
                    </ul>
                    <ul>
                        <li>{ele.country}</li>
                    </ul>
                    <ul>
                        <li>{ele.id}</li>
                    </ul>
                    <span>
                    <ul>
                        <button onClick={()=>Deleteuser(ele.id)}>Delete</button>
                    </ul>
                    <ul>
                
                    </ul></span><br /></>
                })
            }
            
        </div>
    );
}

export default Tshow;