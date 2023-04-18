import { useSelector,useDispatch } from "react-redux";
import {  usersSelector,clearState } from "./Slice/userSlice";

import {useEffect} from "react";
function user(){
const dispatch = useDispatch();
const{
    users:[],
    state.isError = false;
    state.errorCode= 0;
    state.error.essage="";
    state.isFetching = false;
    
} = useSelector(usersSelector)

    useEffect(()=>{
        
            dispatch(clearState());
        },[]);

    return(

        <div>
        {!isFetching ? 'hello' : 'Click here'}
        </div>
    )
    
}
export default user;
