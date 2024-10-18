import { combineReducers } from "redux";
import reducer from './reducer'

const rootreducer=combineReducers ({
    reducer:reducer
})
export default rootreducer;