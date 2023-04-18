function Arrays(){
let arr = [1,2,3,4,5];
// let abc=arr.map((item,index)=>{
//     return<span key={index}> 
//     index{index}-item{item}

//         {item}
//         </span>
// }); 
const ne = arr.map((x) => x *1);

  return(
        <>
        {/* <h1>{abc}</h1> */}
        <div>
        {ne}
       </div>
      </> 
    )
    
}
export default Arrays;