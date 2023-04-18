import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
const Day1 = () => {

const [counter, setCounter] = useState(0)
  const[isDisabled,setDisabled]=useState(false)
  
  const handleClick1 = () => {
      setDisabled(false)
    if(counter>=5){ 
      toast("number is greater than 5 ")
       setDisabled(true)
    }else{
       setCounter(counter + 1)
    }
  }

  const handleClick2 = () => { 
    setDisabled(false)
      if(counter<=0){ 
      setDisabled(true)
      toast("Zero limit ")
      const displayLoginNotification = () => {
       };
      }else{
        setCounter(counter - 1)
          
      }       
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'pink',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter App
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons"> 
      <ToastContainer />
        <button
       
         style={{
         fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'brown',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}>Increment</button>
        <button
        // disabled={isDisabled} 
        style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'skyblue',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>Decrement</button>
      </div>
    </div>
  )
}
  
export default Day1;