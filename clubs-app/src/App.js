import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navigation/Navbar/Navbar';
import Homepage from './containers/HomePage/Homepage';
import Auth from './containers/Auth/Auth';
import Clubpage from './containers/ClubPage/ClubPage';
import Events from './containers/EventsPage/Events';
import Preview from './components/Preview/Preview';
import LoginPreview from './components/Preview/LoginPreview';
import ClubPreview from "./components/Preview/ClubPagePreview";

function App() {



  return (
    <div className="App">
        <Switch>
            <Route path="/home" exact component={Navbar}/>
            <Route path="/clubpage/:clubname" component={Navbar}/>
            <Route path={"/events"} component={Navbar}/>
        </Switch>

        <Switch>
            <Route path="/preview" exact component={Preview}/>
            <Route path="/authpreview" exact component={LoginPreview}/>
            <Route path="/clubpreview" exact component={ClubPreview}/>
            <Route path="/home" exact component={Homepage}/>
            <Route path="/clubpage/:clubname" component={Clubpage}/>
            <Route path={"/events"} component={Events}/>
            <Route path="/" exact component={Auth}/>
            <Redirect to=""/>
        </Switch>
    </div>
  );
}

export default App;
