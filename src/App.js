import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import { Fragment } from 'react';

function App() {
  return (
    <div className='container'>
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
