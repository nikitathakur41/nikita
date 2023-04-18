import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Model from './model.jsx'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { formik } from 'formik'
import { Formik,Field } from 'formik'
import { useFormik } from 'formik';


function Edit({todo1}) {

 console.log('hello')

  const [authors, setAuthors] = useState();
  const [show, setShow] = useState(false);
  const handleShow = ()=> setShow(true);
  const handleClose = () => setShow(false);
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [role, setrole] = useState('');
  const [profession, setprofession] = useState('');
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [sub, setSub] = useState();
  const [data, setdata] = useState();
  const [post, setPost] = useState();

  const onEdit=(id)=>{
    axios.patch(`http://localhost:3001/authors/${id}`)
  }
  
  const ageonchange = (e) => {
    setage(e.target.value)
  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FORM EDITION</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
          <h1>validation</h1>
          <Formik
            initialValues={{ name: "", age: '',role: '',profession: '', email: '', Password: '' }}
            validate={values => {
              const errors = {};
              if (
                name.length < 2
              ) {
                errors.name = 'required';
              }

              if (
                !age
              ) {
                errors.age = 'required';
              }
              else if (values.age < 0) {
                errors.age = 'age should not be negative'
              }

              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }


              if (
                !values.password
              ) {
                errors.password = 'required';
              }
              else if (values.password.length < 3) {
                errors.password = 'password is too short'
              }

              return errors;
            }}


            onSubmit={(values, { setSubmitting }) => {
              console.log(values)
              // postdata({name,age,email,Password});

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
                <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder='name'
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

                {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
              </form>
            )}
          </Formik>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => onEdit(todo1._id)}>
            UPDATE
          </Button>
          <Button variant="primary" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit