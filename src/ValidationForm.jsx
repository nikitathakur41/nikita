import {useEffect,useState} from "react";
function Form(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[errormessage,setErrorMessage] = useState("");
    const[isError,setIsError] = useState(false);
    let data = [
        {
          FName : "Nikita",
          LName : "Thakur",
          Email: "nikitathakur0904@gmail.com",
          Password:"niki123"
         
      },
      {
        FName : "garry",
        LName : "Bajwa",
        Email: "garrybajwa09@gmail.com",
        Password:"garry123"
        
    },
    {
      FName : "Gurnik",
      LName : "Rajput",
      Email: "nikg04@gmail.com",
      Password:"gudia123"
      
    }];
    const emailOnChange=(e)=>{
        setEmail(e.target.value);
    }
    const passwordOnChange=(e)=>{
        setPassword(e.target.value);
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        if(email == "" || password == ""){
        setIsError(true)

        alert(" Should be Filled")
    }else{
        for(let i of data){
      if(i.Email == email && i.Password == password){

       alert("Login Succesfully")
       return false;
      }
      else{
        alert('invalid')
        return false;
      }
      
    
    }} 
}


    return(
        <div>
            <form onSubmit={formSubmit}>
            <input type ="Email" name ="Email" onChange={emailOnChange}  placeholder = "Enter your email"></input><br></br>
            <input type ="Password" name ="Password" onChange={passwordOnChange}  placeholder = "Enter your password"></input><br></br>
            <input type ="Submit"/> <br></br>
            </form>
        </div>
    )
    }
    export default Form ;