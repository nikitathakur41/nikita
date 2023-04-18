
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
import Edit from './Edit.jsx' 






function PostData() {
  const [authors, setAuthors] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [role, setrole] = useState('');
  const [profession, setprofession] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [sub, setSub] = useState();
  const [data, setdata] = useState();
  const [post, setPost] = useState(); 

  const [isEdit, setisEdit] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true); 
  }
  

  const Updation = () => {
    return (
      <div>
        <input>name</input>
      </div>
    )
  }

    const nameonchange = (e) => {
    setname(e.target.value)
  }

   const ageonchange = (e) => {
     setage(e.target.value)
   }

  const roleonchange = (e) => {
    setrole(e.target.value)
  }
  const professiononchange = (e) => {
    setprofession(e.target.value)
  }
  const emailonchange = (e) => {
    setemail(e.target.value)
  }
  const passwordonchange = (e) => {
    setpassword(e.target.value)
  }
  
  const getApiData = () => {
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

  const formSubmit = (e) => {
    e.preventDefault()
    if (name=="" ||age=="" ||role=="" ||profession=="" ||email==""||password=="")
    {
      alert("blank")
      return
    }
    postdata()
  }


    const postdata = async () => {
    try {
      axios.post("http://localhost:3001/add_author", {
        name, age,role,profession, email, password
      })
        .then((res) => {
          setPost(res.authors)
        })
    }
    catch (e) {
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <div>
            <h1>validation</h1>
            <Formik
              initialValues={{ name: '', age: '',role:'',profession:'' ,email: '', Password: '' }}
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
                else if (values.age < 65) {
                  errors.age = 'age should not be negative'
                }
                
                if(!values.role){
                errors.role = 'fill the role';
                }

                if (!values.profession) {
                errors.profession = 'fill the profession';
               }
        

                if (!values.email) {
                  errors.email = ' Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }


                if (
                  !values.Password
                ) {
                  errors.Password = 'required';
                }
                else if (values.Password.length < 3) {
                  errors.Password = 'password is too short'
                }

                return errors;
              }}


              onSubmit={(values, { setSubmitting }) => {
                console.log(values)
                postdata({ name, age,role,profession, email, password });

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
                    onBlur={handleBlur}
                    placeholder="name"
                    onChange={nameonchange}

              
                  />
                  {errors.name && touched.name && errors.name}
                  <input
                    type="text"
                    name="age"
                    id="age"
                    onBlur={handleBlur}
                    placeholder="age"

                    onChange={ageonchange}
                   value={age} 

                  />
                  {errors.age && touched.age && errors.age}


                  <input
                  type="text"
                  name="role"
                  id="role"
                  onBlur={handleBlur}
                  placeholder="role" 
                  onChange={roleonchange}
                  
                  />
                  {errors.role && touched.role && errors.role}


                  <input
                  type="text"
                  name="profession"
                  id="profession"
                  onBlur={handleBlur}
                  placeholder="profession" 
                  onChange={professiononchange}
                  
                  />
                  {errors.profession && touched.profession && errors.profession}

                  <input
                    type="text"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    placeholder="email"
                    onChange={emailonchange}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="text"
                    name="Password"
                    id="Password"
                    placeholder="password"
                    onChange={passwordonchange}
                  />
                  {errors.Password && touched.Password && errors.Password}

          
                </form>
              )}
            </Formik>
          </div>
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
              <th>name</th>
              <th>age</th>
              <th>role</th>
              <th>profession</th>
              <th>email</th>
              <th>Password</th>
              <th>ACTION</th>

            </tr>
          </thead>
          <tbody>
            {authors && authors.length && (
              <>
                {authors.map((todo) => {
                  {/* console.log("hi")
        console.log(todo._id)  */}

                  return (<tr>
                    <td>{todo.name}</td>
                    <td>{todo.age}</td>
                    <td>{todo.role}</td>
                    <td>{todo.profession}</td>
                    <td>{todo.email}</td>
                    <td>{todo.password}</td>
                    <td>
                       <button onClick={handleEdit}>Edit</button>
                        {showEdit && <Edit todo1={todo} />}
                        
                        {<Button onClick={() => onDelete(todo._id)
                    }>

                      DELETE

                    </Button>}

                  
                    </td>
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


export default PostData;

