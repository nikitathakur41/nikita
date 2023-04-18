// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import StackFrame from "stackframe";
// import { message } from "statuses";
// const initialState  = {
//     users:[],
//     isFetching:false,
//     isError:false,
//     errorCode:0,
//     errorMessage:"",
// }

// //  export const getUsers = createAsyncThunk(
// //     "users/getUsers",
// //     async(_,thunkAPI)=>{
// //         try{
// //     fetch(
// //         "http://localhost:3001/authors"
// //       ).then(response => {
// //         return response.json()
// //       })
// //         .then(data => {
// //           console.log(data)
// //           setAuthors(data)
// //         })
  
// //           const state = thunkAPI.getState();
// //           const{} = state.users

// //         }catch(error){
// //          if(error.state && error.message){
// //              const message = e.message;
// //              const status = e.status;
// return thunkAPI.rejectWithValue([status,message]) ;


// fetch(
//     "http://localhost:3001/authors"
//   ).then(response => {
//     return response.json()
//   })
//     .then(data => {
//       console.log(data)
//       setAuthors(data)
//     })

// //          }
// //         }

//  export const userSlice = createSlice({
//     name:"users",
//     initialState:initialState,
//     reducers:{
//         clearState:(state)=>{
//             state.isError = false;
//             state.errorCode= 0;
//             state.errorMessage="";
//             state.isFetching = false;
//             return state;


//         }
//     }
// });

// // extraReducers:{
// //     [getUsers.fulfilled]:(state,{payload})=>{
// //         return state;
// //     },
// //     [getUser.rejected]:(state,{payload})=>{
// //         return state;
// //     },
// //     [getUsers.pending]:(state,{payload})=>{
// //         state.isFetching = true;
// //         return state;
// //     },

// // }

// export const{
//     clearState,
// }=userSlice.actions;

// export const userSelector = (state) => state.users;










//        extraReducers:
         
//         [getUsers.fulfilled];(state,{payload})=>{
//             state.users = payload,docs;
//             state.isFetching = false;
//             state.isSuccess = true;
//             state.isError = false;
//             state.errorCode = 0;
//             state.errorMessage="";
//             return state;
//         },
//         [getUser.rejected];(state,{payload})=>{
//             return state;
//         },
//         [getUsers.pending];(state,{payload})=>{
//             state.isFetching = true;
//             return state;
//             
    
    