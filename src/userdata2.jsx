
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
//const axios=require('axios');


function Userdata(){
    const [users, setUsers]=useState([]);
    const [isError, SetIsError]=useState("false");
    const [errorMessage, SetErrorMessage]=useState("Error in fetching Data");

    const [post, setPost] = useState("");
    const [data, setData] = useState(null);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [role, setRole] = useState("");
    const [profession, setProfession] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch("http://localhost:3000/users").then((result) => {
            result.json().then((res) => {
                 if(res.length) {
                    setUsers(res)
                }

        
            })
        })
    },[])


const postdata=async() => {
  try{
   const response = await axios.post("http://localhost:3001/users",
    {
      id,
      name,
      age,
      role,
      profession
    })
    .then((response) => {
      setPost(response.data)
    })
  }
    catch(error){
      console.log("error",error)
    }
  
}

const FormSubmit= (e) => {
  e.preventDefault();
  if(id=="" || name=="" || age=="" || role=="" || profession=="" )
  {
    SetIsError(true)
    alert("Fill the details")
  }
  else{
    for(let i in data){
      if(data[i].id === id && data[i].name === name && data[i].age === age && data[i].role === role && data[i].profession === profession ){
        alert("login successfully ")
        return false;
      }
      alert("Invalid")
      return false;
    }
    postdata();
  }
}
const listItems= users.map((item) =>{
return(
    <tr>
    <td>{item._id}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.profession}</td>
  </tr>
)
     }
     )

return (
    <>
    <div>{users &&  users.length && <>
    <Table  striped bordered hover>
<thead>
        <tr>

          <th>Id</th>
          <th>Name</th>
          <th>age</th>
          <th>Profession</th>
        </tr>
        </thead>
        <tbody>
        {listItems}
      </tbody>
    </Table>
    </>
    }
    </div>
    <div>

<Button variant="success" onClick={handleShow}>
        Launch demo modal
      </Button>{''}

    <Modal show={show} handleClose={handleClose}/>
    
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <form onSubmit >
                ID <input type="text"></input><br></br>
                NAME <input type="text"></input><br></br>
                AGE <input type="text"></input><br></br>
                ROLE <input type="text"></input><br></br>
                PROFESSION <input type="text"></input><br></br>
                STORY <input type="text"></input>
            </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
        Submit
        </Button>
        </Modal.Footer>
      </div>
    </>
  

    )
    

    
}
export default Userdata;

