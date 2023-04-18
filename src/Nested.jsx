function Nested(){
    let a= true;
    let b = false;
    let c= false;
    return(
     <>
        {a == true? <h1>
            WELCOME GUYS
        {b == true ? <h1>
            HOW ARE YOU 
         </h1> : <h1>Error1</h1>}
         </h1> : <h1>Error2</h1>}
     </>
    )
}
export default Nested;