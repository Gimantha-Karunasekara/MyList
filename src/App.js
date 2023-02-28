import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Auth from './components/auth/Auth';
import MainPage from './components/MainPage/MainPage';
import { AuthContext } from './context/auth-context';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <Router>
        <Routes>
          <Route path='/' element={authCtx.isLoggedIn ? <MainPage/> : <Navigate to='/auth'/>}/>
          <Route path='/auth' element={authCtx.isLoggedIn ? <Navigate to='/'/> : <Auth/>} />
          <Route path='*' element={authCtx.isLoggedIn ? <Navigate to='/'/> : <Navigate to='/auth'/>} />
        </Routes>
    </Router>
  );
}

export default App;
