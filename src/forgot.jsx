
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./index.css";
//import { Getbytoken, Setbytoken } from "./Servise.jsx";
import { useFormik } from "formik";
import { SignInAPI } from "./Api";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Forgot = ({
  usersData,
  setUsersData,
  show,
  setShow,
  editUser,
  setEditUser,
}) => {
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setEditUser(null);
    setShow(true);
  };
  return (
    <div>
      <Formik
        initialValues={
          editUser
            ? editUser
            : {
                email: "",
               
              }
        }
        //  validationSchema={SignupSchema}
        onSubmit={async (values, error) => {
          console.log("dfrgf");
          if (values.email ) {
            try {
              const response = await SignInAPI(values);

              if (response.status == 200) {

                
              }
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">
                EMAIL
                <Field name="email" className="form-control" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <ErrorMessage name="email" />
              </label>
            </div>
           
            <Button type="submit" variant="primary">
              SEND OTP
            </Button>
            
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Forgot;


