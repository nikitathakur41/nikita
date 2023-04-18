function Task({arr}){
 
    return(
           <div>
           {arr.map((item,index)=>(
         <div key ={index}>
       <li><div>Name : {item.FName+" "+item.LName}</div>
       <div>Email:{item.Email}</div>
       <div>{item.Age>=18 ? "legal" : "illegal"}</div>
       <div>{item.Belong_to_India ? <div>
       <div>state: {item.State}</div>
       <div>city : {item.City}</div>
       </div>
   
        :"not belongs to india" 
             
        } </div></li>
       
       </div>
               ))}
               </div>
       )
   }
   export default Task;