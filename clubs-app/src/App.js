import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './containers/HomePage/Homepage';
import Clubpage from './containers/ClubPage/ClubPage';
import Sidedrawer from './components/Navigation/Sidedrawer/Sidedrawer';
import Preview from './components/Preview/Preview';

function App() {



  return (
    <div className="App">
        <Switch>
            <Route path="/home" exact component={Navbar}/>
        </Switch>

        <Switch>
            <Route path="/preview" exact component={Preview}/>
            <Route path="/home" exact component={Homepage}/>
            <Redirect to=""/>
        </Switch>
    </div>
  );
}

export default App;
