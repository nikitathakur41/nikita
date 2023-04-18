
import React from 'react';
import { Formik, Field } from 'formik';
import { useState } from "react";
import axios from 'axios';

const Basic = (props) => {

  const [data, setData]= useState();
  const [error, setError]= useState(false);
  const [post, setPost]= useState();
  const [apiData, getApiData]= useState();
  return (
  <div>
    <h1>Model </h1>
    <Formik
      initialValues={{name: '',age: '',role: '',profession: '', email: '', password: '' }}
      validate={values => {
        const errors = {};

        if(!values.name){
          errors.name = 'fill the name';
        }else if ((values.name.length) <=3 ) 
        {
          errors.name = 'Name is too short';
        }

        if(!values.age){
          errors.age = 'fill the age';
        }

        if(!values.role){
          errors.role = 'fill the role';
        }
        
        if (!values.profession) {
            errors.profession = 'fill the profession';
          }
        
        if (!values.email) {
          errors.email = 'fill the email';
        } else if (
          !/^[A-Z 0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if(!values.password){
          errors.password = 'fill the password';
        }

        return errors;
        
       
      }}
      onSubmit={({name,age,role,profession,email,password}, { setSubmitting }) => {
        const getdata=async()=>{
          try{
            const response=await fetch("http://localhost:3001/add_author")
            const actualData=await response.json();
            setData(actualData);
          }
          catch(error){
            setError(error.message);
            console.log(error);
          }
        }
    
        const postdata=async()=>{
          try{
            axios.post("http://localhost:3001/add_author",{
              name,age,role,profession,email,password
            })
            .then((res)=>{
              setPost(res.author)
            })
          }catch(e){
            console.log(e)
          }
          getApiData()
        }
        
        setTimeout(() => {
          alert(JSON.stringify(name,age,profession,role,email,password, null, 2));
          setSubmitting(false);
        }, 400);
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
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          /><br></br>
          {errors.name && touched.name && errors.name}
          <br></br><br></br>

          <label>Age: </label>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            /><br></br>
            {errors.age && touched.age && errors.age}
             <br></br><br></br>
            
            
            
            {/* <input */}
            <label>Role: </label>
            <Field as="select" name="role">
             <option value="Developer"> Developer </option>
             <option value="IT"> IT </option>
             <option value="SystemAdmin"> SystemAdmin </option> </Field>


            {/* onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
            /> <br></br>
            {errors.role && touched.role && errors.role} */}
             <br></br><br></br>

             <label>Profession: </label>
            <input
            type="text"
            name="profession"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.profession}
            /><br></br>
            {errors.profession && touched.profession && errors.profession}
             <br></br><br></br>

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

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  )
      }

export default Basic;
