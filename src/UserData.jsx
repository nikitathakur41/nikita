import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Userdata(){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const[users,setUsers] = useState([]);
    const[isError,setIsError] = useState("false");
    const[errorMessage,setErrorMessage] = useState("Error in fetching Data");

    useEffect(()=> {
        fetch("http://localhost:3001/users").
        then((result)=>{result.json().
          then((res)=>{
                // console.log(res)
                // setUsers(res)
                if(res.length){
                  setUsers(res)
                }
                 
            })
        })

    },[])
        // <>
        // <div>
       
        // <span>{item.name}</span> &ensp;
        // <span>{item.age}</span> 
        // <span>{item.role}</span> &ensp;
        // <span>{item.profession}</span> &ensp;
        // <span>{item.stories}</span>

        // </div>
      const listItems = users.map((data)=>{
        return( 
        
          <tr> 
          <td>{data._id}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.role}</td>
          <td>{data.profession}</td>
         
        </tr>
        )
      })
      return(
        <div>{users && users.length && <>
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
        <tbody>{listItems}</tbody>
      </Table> 
      {/* <>
          <Button variant="success">Add User</Button>{' '}
          </> */}

       </>
}
      </div>

    );
  
    return(
        <div>{users.length && <>{listItems}</>}</div>

        
    )
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <form>
            Id <input type = "text"></input><br></br>
            Name <input type = "text"></input><br></br>
            Age <input type = "text"></input><br></br>
            Role <input type = "text"></input><br></br>
            Profession <input type = "text"></input><br></br>
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>
      </Modal.Footer>
      </Modal>
    </>
    )
};
export default Userdata;




