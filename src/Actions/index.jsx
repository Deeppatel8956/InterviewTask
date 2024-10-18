import { useEffect, useState } from "react";
import { GetApiDetails,PostApiDetails,DeleteApiDetails, UpdateApiDetails ,UpdateApiDetailsn} from "../API/AxiosRequest";

export const GetApiAction=()=>{
    return function (dispatch){
        return GetApiDetails().then((res)=>{
            // console.log(res)
            dispatch({
                type:"GET_DETAILS",
                payload:res.data,
            })
        })
    }
}

export const PostApiAction=(request)=>{
    return function (dispatch){
        return PostApiDetails(request).then((res)=>{
            console.log(res)
            dispatch({
                type:"POST_DETAILS",
                payload:"",
            })
        })
    }
}

export const DeleteApiAction=(id)=>{
    return function (dispatch){
        return DeleteApiDetails(id).then((res)=>{
            console.log("Delete responce ....",res)
        
            dispatch({
                type:"DELETE_DETAILS",
                payload:res.data,
            })
        })
    }
}



export default(props)=>{
    const [detailbyid,setDetailbyid]=useState({});
    const Getetailsid=(request,id)=>{
        return UpdateApiDetails(request,id).then((res)=>{
            console.log(" id data",res);
            setDetailbyid(res)
        })
    }
    useEffect(()=>{
        Getetailsid(props);
    },[])
    return [detailbyid];
}

//data updata
export const UpdateApiAction=(request,id)=>{
    return function (dispatch){
        dispatch({
            type:"UPDATE_DETAILS",
            payload:false,
        });
        return UpdateApiDetailsn(request,id).then((res)=>{
            console.log(" id data",res);
            // setDetailbyid(res)
            dispatch({
                type:"UPDATE_DETAILS",
                payload:true
            });
        });
    };
};