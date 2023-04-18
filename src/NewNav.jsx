import { NavLink } from 'react-router-dom'; 

import Welcome from './Welcome'; 

 function Navbar(){
    return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
   <li><a class="navbar-brand" href="/home">Home</a></li> 
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      {/* <li class="nav-item active">
        <a class="nav-link" href="/user">User</a>
      </li> */}
      
      
    </ul> 
    <li class="nav-item active">
        <a class="nav-link" href="/login">Data</a>
      </li>
    
  </div>
</nav> 
    )} 


    export default Navbar

