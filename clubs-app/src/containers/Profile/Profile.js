import React, {Component} from 'react';
import classes from './Profile.module.css';
import SearchFooter from "../../components/SearchFooter/SearchFooter";
import img from "../../assets/HERO-IMG-2.png";
import InterestGroups from '../../components/UI/InterestGroups/InterestGroups';
import {clubs, events} from "../../shared/data";
import Clubportal from "../../components/ClubOutlook/ClubPortal/ClubPortal";
import profileimage from '../../assets/ProfileImage.jpg';
import Aux from '../../hoc/Auxiliary';
import EventsPortalBig from "../EventsPage/EventsPortalBig/EventsPortalBig";

class Profile extends Component {

    state = {
        view: "home",
        toggle: "0%",
        homeActive: true,
        eventsActive: false
    };

    click = e => {

    };

    changeView = (view) => {
        if (view === "home") {
            return this.setState({view: view, homeActive: true, eventsActive: false})
        }

        if (view === "events") {
            return this.setState({view: view, homeActive: false, eventsActive: true})
        }
    };

    toggle = pos => {
        this.setState({toggle: pos});
    };

    render() {
        let clubsList = clubs.slice(2, 5).map(club => (
            <Clubportal key={club.clubName} image={club.image} name={club.clubName} small fit/>
        ));

        const eventsList = events.slice(4,6).map(event => (
            <EventsPortalBig key={event.eventName} image={event.image} name={event.eventName} time={event.time} clubname = {event.clubName} day={event.day} month={event.month}/>
        ));

        let view = this.state.view==="home" ?
            <Aux>
                <p className={classes.about}>

                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    {'\n\n'}
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                </p>
                <div className={classes.line}/>
                <h1 className={classes.ProfileHeaderSmall}>Interests</h1>
                <InterestGroups interests={[
                    {
                        value: "Public Speaking",
                        on: true
                    },{
                        value: "Running",
                        on: true
                    },{
                        value: "Technology",
                        on: true
                    },{
                        value: "Cricket",
                        on: true
                    },{
                        value: "Createathon",
                        on: true
                    }
                ]}
                                click={this.click}/>
            </Aux> : <Aux>
                <button className={classes.Toggle}>
                    <button style={{left: this.state.toggle}}/>
                    <div style={{left: "0%"}} onClick={() => this.toggle("0%")}>
                        All
                    </div>
                    <div style={{left: "33.5%"}} onClick={() => this.toggle("33.5%")}>
                        Upcoming
                    </div>
                    <div style={{left: "67.2%"}} onClick={() => this.toggle("67.2%")}>
                        Past
                    </div>
                </button>
                <div style={{width: "100%", height: "100%",margin: "0 0 0 -9%"}}>
                {eventsList}
                </div>
            </Aux>;

        return (
            <div className={classes.Profilepage}>
                <div className={classes.Header}>
                    <img className={classes.image} src={img} alt={''}/>
                </div>
                <div className={classes.ProfileDirectory}>
                    <div className={classes.ProfileImageHolder}>
                        <img src={profileimage} alt={''}
                             className={classes.ProfileImage}
                        />
                    </div>
                    <h1 className={classes.ProfileHeader}> Hill, Danielle </h1>
                    <div className={classes.line}/>

                    <div className={classes.Tabs}>
                        <button style={{borderBottom: this.state.homeActive ? "8px solid #9EE000" : ""}} onClick={() => this.changeView("home")}>About </button>
                        <button style={{borderBottom: this.state.eventsActive ? "8px solid #9EE000" : ""}} onClick={() => this.changeView("events")}>Events</button>
                        <i className={["fas fa-pencil-alt",classes.icon].join(" ")}/>
                    </div>
                    <div className={classes.line}/>
                    {view}
                </div>
                <div className={classes.clubsList}>
                    <h1 className={classes.ProfileHeaderSmall}>Groups Joined</h1>
                    {clubsList}
                </div>
                <SearchFooter header = "Suggested Clubs"/>
            </div>
        )
    }
};

export default Profile;