import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Model from './model.jsx'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import { formik } from 'formik'
import { Formik } from 'formik'
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
                <input
                  type="text"
                  name="name"
                  id="name"
                  // onBlur={handleBlur}
                  placeholder="name" 
                  value={todo1.name}
                //  onChange={nameonchange} 

                // value={values.name}

                />
                {errors.name && touched.name && errors.name}
                <input
                  type="text"
                  name="age"
                  id="age"
                  onBlur={handleBlur} 
                  value={todo1.age}
                  placeholder="age"

                 onChange={ageonchange}
                // value={values.age} 

                />
                {errors.age && touched.age && errors.age}

                <input
                  type="text"
                  name="role"
                  id="role"
                  onBlur={handleBlur}
                  placeholder="role" 
                  value={todo1.role}
                  />
                  {errors.role && touched.role && errors.role}


                  <input
                  type="text"
                  name="profession"
                  id="profession"
                  onBlur={handleBlur}
                  placeholder="profession" 
                  value={todo1.profession}
                  />
                  {errors.profession && touched.profession && errors.profession}


                <input
                  type="text"
                  name="email"
                  id="email"
                  onBlur={handleBlur}
                  placeholder="email" 
                  value={todo1.email}
                // onChange={emailonchange}
                // value={values.email}
                />
                
                {errors.email && touched.email && errors.email}
                <input
                  type="text"
                  name="password"
                  id="password"
                  // onBlur={handleBlur}
                  placeholder="password"
                  value={todo1.password}
                // onChange={Passwordonchange}
                // value={values.Password}
                />
                {errors.password && touched.password && errors.password}

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