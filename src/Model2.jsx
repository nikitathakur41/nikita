import React, { useState } from 'react';
import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
       initialValues={{id:'', name: '', age: '', role:'',profession:''}}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name= 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
         ) {
           errors.name= 'Invalid name';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
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

            <form>
            Id <input type = "text"></input><br></br>
            Name <input type = "text"></input><br></br>
            Age <input type = "text"></input><br></br>
            Role <input type = "text"></input><br></br>
            Profession <input type = "text"></input><br></br>
          </form> 
       )}
       </Formik>
          </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}
export default Example;

