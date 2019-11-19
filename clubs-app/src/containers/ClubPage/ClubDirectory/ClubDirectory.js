import React, {Component} from 'react';
import classes from './ClubDirectory.module.css';
import ClubHome from './ClubHome/ClubHome';
import Aux from '../../../hoc/Auxiliary';
import Chat from '../../../components/Chat/Chat'
import EventsList from "./EventsListClubPage/EventsList";

class ClubDirectory extends Component {

    state = {
        view: "home",
        homeActive: true,
        eventsActive: false
    };

    changeView = (view) => {
        this.setState({view: view});
        if (view === "home"){
            return this.setState({homeActive: true, eventsActive: false});
        } else if (view === "Events") {
            return this.setState({homeActive: false, eventsActive: true});
        }
    };

    render() {

        let view = (this.state.view === "home" ?
            <Aux>
                <ClubHome clubname={this.props.clubname}/>
                <div className={classes.line}/>
                <Chat title={"Chat"}/>
                <div className={classes.line}/>
            </Aux>
                :
            <Aux>
                <EventsList clubname={this.props.clubname}/>
            </Aux>
        );

        return (
            <div className={classes.ClubDirectory}>
                <div className={classes.Tabs}>
                    <button className={this.state.homeActive ? classes.Active : ""} onClick={() => this.changeView("home")}>Home</button>
                    <button className={this.state.eventsActive ? classes.Active : ""} onClick={() => this.changeView("Events")}>Events</button>
                </div>
                <div className={classes.line}/>
                {view}
            </div>
        )
    }

};

export default ClubDirectory;