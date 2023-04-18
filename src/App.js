import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
//import Welcome from './Welcome';
import { Routes, Route } from 'react-router-dom';
//import  Welcomes from './Home';
//import nav from './nav'; 
//import Welcome from './Welcome.js'
//import Car from './classcomponent.js'
//import Arrays from './arrayinfunction.js'
//import Array from './arrayofobject.js';
//import Property from './property';
//import Nikita from './property1';
//import Parentfunction from './Parentfunction';
//import Boolean from './Conditionalrendering';
//import Fruits from './usestate';
//import Nested from './Nested';
//import Task from './Assignment';
 //import Clock from './StateAndLifecycle';
// import Abc from './USESTATE1'; 
// import Form from './ValidationForm';
//import  FancyBorder from './Composition';
//import Userdata from './UserData';
//import Userdata from './UserData';
//import React, { useState } from 'react';
//import Example from './Model1';
//import Modal from 'react-bootstrap/Modal';
//import Userdata from './userdata2';
//import Basic from './Formik';
//import InputForm from './FormikForm';
//import Basic from './FinalFormik';
//import Basic from './FormikForm';
//import Example from './Model2';
//import Getuser from './postform';
//import  Example from './Model1';
//import Basic from'./FinalFormik';
//import PostData from './post2';
//import NavBar from './navbarcomponent';
//import NewPost from './NewPost';
//import PostData from './post3';
//import Navbars from './Navbar2';
//import Nab from './Navbar3';
//import Nav from'./Navbar';
//import Navbarnav from './Navbar4';
//import Sign from './Tokenform2';
//import Tokenform from './Tokenform';
//import user from './Sliceuser';
//import Login from './logiin'
//import Forgot from './forgot';
import Repeat from './navbarnew.jsx';
import Day1 from './Counterapp';

function App() {
  
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
// let arr = [
//     {
//       FName : "Nikita",
//       LName : "Thakur",
//       Email: "nikitathakur0904@gmail.com",
//       Age : 23,
//       Nationality : "Indian",
//       Belong_to_India : true,
//       State : "Punjab",
//       City : "Pathankot"
//   },
//   {
//     FName : "garry",
//     LName : "Bajwa",
//     Email: "garrybajwa09@gmail.com",
//     Age : 24,
//     Nationality : "Indian",
//     Belong_to_India : true,
//     State : "Punjab",
//     City : "Hoshiarpur"
// },
// {
//   FName : "Gudia",
//   LName : "Rajput",
//   Email: "gudi04@gmail.com",
//   Age : 20,
//   Nationality : "Canadian",
//   Belong_to_India : false,
//   State : "British Columbia",
//   City : "Toronto"
// },
// {
//   FName : "jassi",
//   LName : "Singh",
//   Email: "jassi12@gmail.com",
//   Age : 17,
//   Nationality : "India",
//   Belong_to_India : true,
//   State : "Punjab",
//   City : "Gurdaspur"
// },
// {
//   FName : "seerat",
//   LName : "Kaur",
//   Email: "seerat432@gmail.com",
//   Age : 18,
//   Nationality : "Australian",
//   Belong_to_India : false,
//   State : "Victoria",
//   City : "Sydney"
// },
// {
//   FName : "Gurnik",
//   LName : "Singh",
//   Email: "gurnik09@gmail.com",
//   Age : 22,
//   Nationality : "Americans",
//   Belong_to_India : false,
//   State : "United States",
//   City : "California"
// },

//  ]
  return (
    <div className="App"> 
    <Day1/>
    <Repeat/>
    {/* <Login/> */}
  
           {/* {<Task arr= {arr}/>
      } */}
      
{/*    
        <Clock/>
    <Abc/> 
     <Form/>
    
    
  
          <Array/>
       <Nikita abc={["Nikita","abc"]}/>
       <Parentfunction parfun={(a,b)=> 10*2}/>
       <Boolean/>
      <Fruits/>
       <Nested/> 
     */}
{/* 
     <FancyBorder color ={"blue"}>
       <div>nikitathakur</div>
     </FancyBorder> */}
    {/* <Userdata /> */}
  
    {/* <Userdata/> */}
     {/* <Button variant="primary" onClick={handleShow}>
        Button
      </Button>
      <Button variant="secondary" onClick={handleShow}>
        Close
      </Button>
      <Button variant="primary" onClick={handleShow}>
        Save changes
      </Button>
      <Modal show={show} onHide={handleClose}>
        </Modal> */}
    
       {/* <Example/> */}
       {/* <Userdata/> */}

      {/* <Basic/> */}
      {/* <InputForm/> */}
     {/* <Getuser/> */}
     {/* <Example/> */}
    {/* <Basic/> */}
    {/* <Basic/> */}
     {/* <PostData/> */}
     <Routes>
          {/* <Route path="/" element={<Welcome />} /> */}
          
          <Route path="/day1" element={<Day1/>} /> 
       </Routes>
  
   {/* <NewPost/> */}
   {/* <PostData/> */}
   {/* <Nav/> */}
   {/* <Navbars/> */}
    
{/* <Routes>
    <Route path='/' element={<Login/>} /> 
    <Route  path='/forgot' element={<Forgot/>}> </Route> 
    
 </Routes>
    */}
    {/* <Routes>//
          <Route path="/Home" element={<Welcomes/>} />
          
          <Route path="/postform" element={<Getuser/>} /> 
       </Routes>
       <Navbarnav/> */}
      {/* <Basic/>  */}
    {/* <PostData/> */}
    {/* <Tokenform/> */}
    {/* <Sign/> */}
    {/* <user/> */}
  
    {/* <Forgot/> */}
</div>
  
   
     
  );
}
export default App;
