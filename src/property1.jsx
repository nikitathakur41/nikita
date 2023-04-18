function Nikita({abc}){
    
    
    return(
        <>
    {abc.map((item, index) => (
      <div key={index}> 
      <tr>
        <li>
        <div>id: {item.id}</div> 
        <div>name: {item.name}</div>
        
        </li> 
        </tr>
        </div>
    ))}
  </>
    )}

    export default Nikita;