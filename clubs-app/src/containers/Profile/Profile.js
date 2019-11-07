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
        view: "home"
    };

    click = e => {

    };

    changeView = (view) => {
        return this.setState({view: view})
    };


    render() {
        let clubsList = clubs.slice(0, 3).map(club => (
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
                    <h1 className={classes.ProfileHeader}>Hill, Danielle</h1>

                    <div className={classes.line}/>

                    <div className={classes.Tabs}>
                        <button onClick={() => this.changeView("home")}>About</button>
                        <button onClick={() => this.changeView("Events")}>Events</button>
                    </div>
                    <div className={classes.line}/>
                    {view}
                </div>
                <div className={classes.clubsList}>
                    <h1 className={classes.ProfileHeaderSmall}>Clubs Joined</h1>
                    {clubsList}
                </div>
                <SearchFooter header = "Suggested Clubs"/>
            </div>
        )
    }
};

export default Profile;