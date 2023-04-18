import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
    
 <nav class ="nav-links">
       <ul>
          <li>
             <Link to="/">Welcome</Link>
          </li>
          <li>
             <Link to="/about">Clock</Link>
          </li>
         </ul>
 </nav>
 );
};

export default NavBar;