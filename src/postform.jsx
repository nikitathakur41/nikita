import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Model from './model.jsx' 
import axios from 'axios' 
import Modal from 'react-bootstrap/Modal';
import { Formik, Field } from 'formik';

function Getuser(){ 
    const [authors, setAuthors] = useState();
    const [show, setShow] = useState(false); 
    const handleShow = ()=> setShow(true);
    const handleClose = () => setShow(false);
    const [id, setid] = useState(); 
    const [name,setname]=useState(); 
    const [age,setage]=useState(); 
    const [role,setrole]=useState(); 
    const [email,setemail]=useState(); 
    const [password,setpassword]=useState(); 
    const [profession,setprofession]=useState(); 
    
    const [error, setError]= useState(false);
    const [data,setdata]=useState();
    const [post,setPost]=useState();

    

    const idonchange=(e)=>{
        setid(e.target.value)
    } 
    

    const nameonchange=(e)=>{
        setname(e.target.value)
    } 
    
    const ageonchange=(e)=>{
        setage(e.target.value)
    } 

     
    const roleonchange=(e)=>{
        setrole(e.target.value)
    } 

     
    const professiononchange=(e)=>{
        setprofession(e.target.value)
    } 

    const emailonchange=(e)=>{
      setemail(e.target.value)
  } 

  const passwordonchange=(e)=>{
    setpassword(e.target.value)
} 


 // Function to collect data

  const getApiData =  () => {
       fetch(
      "http://localhost:3001/authors"
    ).then(response => {
      return response.json()
    })
    .then(data => { 
      console.log(data)
      setAuthors(data)
    })
    
  };

  useEffect(() => {
    getApiData();
  }, []);
console.log(authors) 

const formSubmit=(e)=>{
    e.preventDefault() 
    if (name=="" ||age=="" ||role=="" ||profession=="" ){
        alert("blank") 
        return 
    } 
   
  } 
  


    const postdata= async()=>{
        try{
            axios.post("http://localhost:3001/add_author",{
                name ,age,role,profession,email,password

            }) 
            .then((res)=>{
                setPost(res.users)
        })
        } 
        catch(e){
            console.log(e)
        }   
        getApiData()
       
    }
    const onDelete = (id) => {
      console.log(id)
      axios.delete(`http://localhost:3001/deleteauthors/${id}`)
      .then(() => {
          getApiData();
        })
    }
    
return ( 
    <> 
    <Button variant="primary" onClick={handleShow}>
       add user
     </Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
        <form onSubmit={postdata}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            value={values.name}
          /><br></br>
          {errors.name && touched.name && errors.name}
          <br></br><br></br>

          <label>Age: </label>
          <input
            type="number"
            name="age"
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
          
            onBlur={handleBlur}
            value={values.profession}
            /><br></br>
            {errors.profession && touched.profession && errors.profession}
             <br></br><br></br>

          <label>Email: </label>
          <input
            type="email"
            name="email"
          
            onBlur={handleBlur}
            value={values.email}
          /><br></br>
          {errors.email && touched.email && errors.email}
          <br></br><br></br>

          <label>Password: </label>
          <input
            type="password"
            name="password"
            
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
  
    <form  onSubmit={formSubmit}>
    
NAME:<input type="text" id="name"   name="name" onChange={nameonchange}></input> 
AGE:<input  type="text" id="age"   name="age" onChange={ageonchange}></input>
ROLE:<input  type="text" id="role"   name="age" onChange={roleonchange}></input>
PROFESSION:<input  type="text" id="profession"   name="profession" onChange={professiononchange}></input>
EMAIL:<input  type="text" id="email"   name="email" onChange={emailonchange}></input>
PASSWORD:<input  type="text" id="password"   name="password" onChange={passwordonchange}></input>

</form> 
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" onClick={postdata}>
        submit
      </Button>
      <Button variant="primary" onClick={handleClose}>
       close
      </Button>
    </Modal.Footer>
  </Modal> 

   <div> 
    <Table>
   <thead>
      <tr>
        <th>_id</th>
        <th>name</th>
        <th>age</th>
        <th>role</th>
        <th>profession</th>
        <th>email</th>
        <th>password</th>
        
        
        
      </tr>
    </thead> 
    <tbody>  
      {authors && authors.length && ( 
        <>
      {authors.map((todo)=>{
        return(<tr>
          <td>{todo._id}</td>
          <td>{todo.name}</td>
          <td>{todo.age}</td>
          <td>{todo.role}</td>
          <td>{todo.profession}</td>
          <td>{todo.email}</td>
          <td>{todo.password}</td>
          <td><Button type ="Success" name ="edit" onClick={handleShow}>Edit</Button></td>
          {/* <td><Button variant ="Success" name ="delete" onClick={handleShow}>delete</Button></td> */}
          {<Button variant ="Success" name ="delete" onClick={() => onDelete(todo._id)
                    }>

                      DELETE

                    </Button>}
        </tr>)
      
  })
  } 
  </> 
      )}
    </tbody> 
    </Table>
    <Button variant ="Success" onClick={handleShow}>ADD USER</Button>
   </div>
   




    </>
  
)
} 
 
export default  Getuser