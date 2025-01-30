import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
