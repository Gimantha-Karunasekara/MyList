import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Auth from './components/auth/Auth';
import MainPage from './components/MainPage';
import { AuthContext } from './context/auth-context';

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={authCtx.isLoggedIn ? <MainPage/> : <Auth />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
