
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
const Home = lazy(() => import('./Home'));
const User = lazy(() => import('./User'));

const NoMatch = lazy(() => import('./NoMatch'));

 lazy = () => {
 return (
    <>
       <NavBar />
       <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="http://localhost:3001/authors" element={<User/>} />
             <Route path="*" element={<NoMatch />} />
          </Routes>
       </Suspense>
    </>
 );
};

export default lazy;