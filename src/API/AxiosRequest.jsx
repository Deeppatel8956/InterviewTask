import axios from "axios";

export async function Axiosrequest(url,method,headers,params){
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params,
        timeout:1000
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{},
        timeout:1000
    })
}

const GetApiDetails=()=>{
    const headers={
        'content-type':'application/json'
    }
    return Axiosrequest('http://localhost:3000/details','GET',headers,{})
}


const PostApiDetails=(data)=>{
    const headers={
        'content-type':'application/json'
    }
    return Axiosrequest('http://localhost:3000/details','POST',headers,data)
}

const DeleteApiDetails=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return Axiosrequest('http://localhost:3000/details/'+id,'DELETE',headers)
}

//edit data
const UpdateApiDetails=(id)=>{
    const headers={
        'content-type':'application/json'
    }
    return Axiosrequest('http://localhost:3000/details/'+id,'GET',headers,{})
}

//update
const UpdateApiDetailsn=(data,id)=>{
    const headers={
        'content-type':'application/json'
    }
    return Axiosrequest('http://localhost:3000/details/'+id,'PUT',headers,data)
}
export {GetApiDetails,PostApiDetails,DeleteApiDetails,UpdateApiDetails,UpdateApiDetailsn};