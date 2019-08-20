import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './containers/HomePage/Homepage';
import Clubpage from './containers/ClubPage/ClubPage';
import Sidedrawer from './components/Navigation/Sidedrawer/Sidedrawer';

function App() {



  return (
    <div className="App">
        <Navbar></Navbar>
        <Sidedrawer/>
        <Switch>
            <Route path="/clubpage" exact component={Clubpage}/>
            <Route path="" component={Homepage}/>
            <Redirect to=""/>
        </Switch>
    </div>
  );
}

export default App;
