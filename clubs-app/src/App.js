import React from 'react';
import './App.css';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './containers/HomePage/Homepage';
import Sidedrawer from './components/Navigation/Sidedrawer/Sidedrawer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Sidedrawer/>
        <Homepage/>
    </div>
  );
}

export default App;
