
const initialdata={
    details:[],
    isResponce:false,
    isDeletedresponce:false,
    isUpdate:false,
}
const reducer=(state=initialdata,action)=>{
    switch(action.type){
        case 'GET_DETAILS':
            return{
                details:action.payload
            }
            case 'POST_DETAILS':
                return{
                    isResponce:action.payload
                }
            case 'DELETE_DETAILS':
                return{
                    isDeletedresponce:action.payload
                } 
            case 'UPDATE_DETAILS':
                return {
                    isUpdate:action.payload,
                }
        default :
           return state    
    }
}
export default reducer;