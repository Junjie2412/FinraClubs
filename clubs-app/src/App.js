import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './containers/HomePage/Homepage';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Homepage/>
    </div>
  );
}

export default App;
