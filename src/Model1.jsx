import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Model from './model.jsx' 
import axios from 'axios' 
import Modal from 'react-bootstrap/Modal';


function Example(props) {
  const [authors, setAuthors] = useState();
    const [show, setShow] = useState(false); 
    const handleShow = ()=> setShow(true);
    const handleClose = () => setShow(false);
    //const [id, setid] = useState(); 
    const [name,setname]=useState(); 
    const [age,setage]=useState(); 
    const [role,setrole]=useState(); 
    const [profession,setpassword]=useState();  
    const [email,setemail]=useState();  
    const [password,setprofession]=useState();  
    const [data,setdata]=useState();
    const [post,setPost]=useState();


    // const idonchange=(e)=>{
    //     setid(e.target.value)
    // } 
    

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
          name ,age,role,profession

      }) 
      .then((res)=>{
          setPost(res.authors)
  })
  } 
  catch(e){
      console.log(e)
  }   
  getApiData()
 
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD USER
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form  onSubmit={formSubmit}>
        {/* <form onSubmit={onSubmitHandler}> */}
        NAME:<input type="text" id="name"   name="name" onChange={nameonchange}></input> 
        AGE:<input  type="text" id="age"   name="age" onChange={ageonchange}></input>
        ROLE:<input  type="text" id="role"   name="age" onChange={roleonchange}></input>
        PROFESSION:<input  type="text" id="profession"   name="profession" onChange={professiononchange}></input>
        EMAIL:<input  type="text" id="email"   name="email" onChange={emailonchange}></input>
        PASSWORD:<input  type="text" id="password"   name="password" onChange={passwordonchange}></input>
        
          </form> </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={postdata}>
            Submit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
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
        
        </tr>)
      
  })
  } 
  </> 
      )}
    </tbody> 
    </Table>
   </div>
   




    </>
  
)
} 
      
  
export default Example;