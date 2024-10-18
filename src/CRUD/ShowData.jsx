import React, { useEffect } from 'react';
import { GetApiAction,DeleteApiAction } from '../Actions/index';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function ShowData(props) {
   
    const dispatch = useDispatch();
    const response = useSelector((state)=>state.reducer.details)
    console.log(response);
    const deleteddata=useSelector((state)=>state.reducer.isDeletedresponce)
//   console.log(Deleteres);

   useEffect(()=>{
    dispatch(GetApiAction())
   },[dispatch])

if(deleteddata){
    window.location.reload(false)
}
const result=  response?response.map((data,id)=>{
    
    return <>   
        
        <tr key={id}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.eamil}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
        <td><button className='btn btn-danger' onClick={()=>dispatch(DeleteApiAction(data.id))}>Delete</button></td>
        <td><Link to={`update/${data.id}`}><button className='btn btn-info' type='button'>Update</button></Link></td>
        </tr>
        
        </>
}):null;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className='table table table-bordered'>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                            </thead>
              
                        <tbody>
                            {result}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowData;