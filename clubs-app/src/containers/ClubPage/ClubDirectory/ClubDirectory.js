import React, {Component} from 'react';
import classes from './ClubDirectory.module.css';
import ClubHome from './ClubHome/ClubHome';
import Aux from '../../../hoc/Auxiliary';
import Chat from '../../../components/Chat/Chat'
import EventsList from "./EventsListClubPage/EventsList";

class ClubDirectory extends Component {

    state = {
        view: "home"
    };

    changeView = (view) => {
        return this.setState({view: view})
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
                    <button onClick={() => this.changeView("home")}>Home</button>
                    <button onClick={() => this.changeView("Events")}>Events</button>
                </div>
                <div className={classes.line}/>
                {view}
            </div>
        )
    }

};

export default ClubDirectory;