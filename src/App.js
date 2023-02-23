import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Auth from './components/auth/Auth';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
