import Form from 'react-bootstrap/Form';
import React from 'react';
import { Formik, Field } from 'formik';
import { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik'; 
import { Getbytoken,Setbytoken } from './service2';
import { Navigate } from "react-router-dom";
 const key="jhgh"
  const ni=Getbytoken(key)


const Tokenform = () => {

    
    const [show, setShow] = useState(null);
    const [error, setError] = useState(false);
   
    return (
        <div>
            <h1>Fill your form here ! </h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'fill the email';
                    } else if (
                        !/^[A-Z 0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'fill the password';
                    }else if(values.password.length<5){
                        errors.password = 'password must contain 5 digits';
                    }

                    return errors;


                }}
                onSubmit={async(values,errors, {setErrors, setSubmitting }) => {
                     console.log("niki")

                     const SignInAPI = async(data)=>{
                        try{
                            const response = await axios.post("http://localhost:3001/signin",data)
                            if(response.status==200){
                                Promise.resolve(response)
                                return response
                            }
                        }
                        catch(error){
                            return Promise.reject(error)
                        }
                    }
                    
                         if(values.email && values.password){
                       try{
                            const response = await SignInAPI(values)

                         if(response.status ===200){
                             console.log(response)
                             Setbytoken(key,response)
                             Navigate('/user')
                         }
                       }
                    
                    catch(error){
                        console.log(error)
                    } 
                 }
                  
               }}
              
                  
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                
                }) => (
                    <form onSubmit={handleSubmit}>

                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        /><br></br>
                        {errors.email && touched.email && errors.email}
                        <br></br><br></br>

                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        /><br></br>
                        {errors.password && touched.password && errors.password}
                        <br></br><br></br>

                        <button  variant =  "primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Tokenform;

