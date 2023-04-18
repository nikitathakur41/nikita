
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Model from './model.jsx'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'; 
import './index.css' 
import { Getbytoken,Setbytoken } from "./service2.jsx";

import { useFormik } from 'formik'; 
import {SignInAPI} from "./Api.jsx" 
import { Formik, Form, Field, ErrorMessage } from 'formik';  
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const key="jhgh"
const ni=Getbytoken(key)
 
//  const navigate = Navigate()


const Sign= ({usersData,setUsersData,show, setShow, editUser, setEditUser}) =>
{
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditUser(null)
    setShow(true)

}; 
    return(
      <div>
      <Formik
       initialValues={editUser ? editUser:{
        
         email: '',
         Password: ''
         
         

       }}
      //  validationSchema={SignupSchema}
       onSubmit={ async (values,error) => { 
        console.log("dfrgf")
         if(values.email  && values.Password){
            try{
                const response = await SignInAPI(values) 
                 
              if (response.status==200){ 
                // window.localStorage.setItem(response.data.unique)
                console.log(response)
                Setbytoken(key,response) 
                // window.location.href('./user') 
                 Navigate('/user')
                // Backpage()
              }

                }
            catch(error){
                console.log(error)
            } 
         }
        

         
       }}
     >
       {({ errors, touched }) => (
         <Form> 
            
           
           <div className="form-group">
            <label htmlFor="email">email
                <Field name="email" className="form-control" type="email" />{errors.email && touched.email ? <div>{errors.email}</div> : null}
                <ErrorMessage name="email" />
            </label>
           </div>
           <div className="form-group">
            <label htmlFor="Password">Password
                <Field name="Password" className="form-control" />{errors.Password && touched.Password ? (<div>{errors.Password}</div>) : null}
                <ErrorMessage name="Password" />
            </label>
           </div>
           
           
           <Button type='submit'  variant='primary' >LOGIN</Button>
           {/* <li ><a href="/user"><h2>User Details</h2></a></li> */}
          
         </Form> 

       )}
     </Formik> 
  
   </div>

    )
    
} 
export default Sign

