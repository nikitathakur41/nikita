function Array(){
    
    let abc=[{"id":1,"name":"Nikita","role":"student","profession":"It"},
    {"id":2,"name":"Sonali","role":"student","profession":"It"},
    {"id":3,"name":"Sandeep","role":"student","profession":"It"},
    {"id":4,"name":"Sukh","role":"student","profession":"It"},
    {"id":5,"name":"Simran","role":"student","profession":"It"}]
    return(
        <>
    {abc.map((item, index) => (
      <div key={index}> 
      <tr>
        <li>
        <div>id: {item.id}</div> 
        <div>name: {item.name}</div>
        <div>role: {item.role}</div>
        <div>prof: {item.profession}</div>
        </li> 
        </tr>
        
      </div>
    ))}
  </>
    )}

    export default Array;