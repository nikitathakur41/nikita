import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; 
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import  Model from './model.jsx' 
import axios from 'axios' 
import Modal from 'react-bootstrap/Modal';


function Userdata(){
  const [authors, setAuthors] = useState();
    const [show, setShow] = useState(false); 
    const handleShow = ()=> setShow(true);
    const handleClose = () => setShow(false);
    const [id, setid] = useState(); 
    const [name,setname]=useState(); 
    const [age,setage]=useState(); 
    const [role,setrole]=useState(); 
    const [profession,setprofession]=useState(); 
    const [sub,setSub]=useState();  
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




    const subonchange=(e)=>{
        setSub(e.target.value)
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
 add user
</Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Modal</Modal.Title>
</Modal.Header>
<Modal.Body>
<form  onSubmit={formSubmit}>

NAME:<input type="text" id="name"   name="name" onChange={nameonchange}></input> 
AGE:<input  type="text" id="age"   name="age" onChange={ageonchange}></input>
ROLE:<input  type="text" id="role"   name="age" onChange={roleonchange}></input>
PROFESSION:<input  type="text" id="profession"   name="age" onChange={professiononchange}></input>

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
export default Userdata; 
 

  











    {/* const[users,setUsers] = useState([]);
    const[isError,setIsError] = useState("false");
    const[errorMessage,setErrorMessage] = useState("Error in fetching Data");
       
            const url = "http://localhost:3001/authors"

    useEffect(()=> {
        const fetchData = async()=>{
            try{
               const response = await fetch(url);
               const data = await response.json();
               console.log(data)
            }
            catch(error) {
                console.log("data nhi fetch huya")
                setErrorMessage(error.Message)
            }
        }
        fetchData()
    },[]);
    return(
        <div>
        
            <Table striped bordered hover>
    
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
          {users.map((data)=>{
              return(
              <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.role}</td>
              <td>{data.profession}</td>
             
            </tr>
          )
          })}
      </tbody>
    </Table>
   
  );

        </div>
    )
        }

       export default Userdata; */}