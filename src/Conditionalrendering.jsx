function Boolean()
{
    let abc = true;
    return(
    
        <>
    <h2>ConditionalRendering</h2>
        <div>{ abc && <div>Nikita Thakur</div>} </div>
        {abc == true ? <div>
            aaaaaaa
        </div>:<div></div>}
        
        </>
    )
}
export default Boolean;