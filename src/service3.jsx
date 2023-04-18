import React, { useState } from 'react';

const Post = () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Email', email);
      localStorage.setItem('Password', pwd);
   };
   
   return (
      <div className="App">
         <h1>Email of the user:</h1>
         <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <h1>Password of the user:</h1>
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         
         {localStorage.getItem('Email') && (
            <div>
               Email: <p>{localStorage.getItem('Email')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}
        
      </div>
   );
};
export default Post;