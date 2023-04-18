import {useState, useEffect } from "react";
function Abc() {
    const [date,setDate] = useState (new Date());
    const [isError,setIsError] = useState(false);
    const [fname,setFname] = useState("");
    const [FnameErrorMessage,setFnameErrorMessage] = useState("");
    useEffect (()=>{
        const timeId = setInterval(() => {tick()},100);
        return() => clearInterval(timeId);
             }, []);
    useEffect (()=>{},[isError]);

    const handleClick = () => {
        setIsError(true);
    }
    const tick = ()=> {
        setDate(new Date());
    }
    const fnameOnChange = (e) => {
        setFname(e.target.value);
    }
    const formSubmit = (e) =>{
     e.preventDefault();
     if(fname.length !=12){
         setIsError(true)
         setFnameErrorMessage("fname should of 12 characters");
     }
    }

    return(
        <div>
            {date.toLocaleDateString()}
            <form onSubmit = {formSubmit}>
            <input type ="text" value ={fname} name ="fname" onChange={fnameOnChange}/>
            {isError && FnameErrorMessage && <span>{FnameErrorMessage}</span>}
            <input type  = "submit" value = "submit"/>
            <button onClick = {handleClick}>click</button> 
            {isError && <span>Hello NIKI</span>} 
            </form>
        </div>
    )
}
export default Abc;
