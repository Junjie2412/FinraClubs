import React from 'react';
import classes from './ClubPage.module.css';
import ClubDirectory from './ClubDirectory/ClubDirectory';
import EventHub from './EventHub/EventHub';
import PeopleList from "../../components/PeopleList/PeopleList";
import SearchFooter from "../../components/SearchFooter/SearchFooter";
import {NavLink} from "react-router-dom";
import clubroster from '../../assets/ClubRoster.png';
import peoplegoing from '../../assets/PeopleGoing.png';
import {clubs, events} from '../../shared/data'

const Clubpage = (props) => {

    let getPicture = () => {
        var found = clubs.find(function(element) {
            return element.clubName === props.match.params.clubname;
        });
        return found.image;
    };

    let getEvent = () => {
        var found = events.find(function(element) {
            return element.clubName === props.match.params.clubname && element.eventName === props.match.params.eventname;
        });
        return found;
    };

    let view = (props.match.params.eventname ? <EventHub eventname={props.match.params.eventname} eventDescription={"ds"} month={getEvent().month} day={getEvent().day} time={getEvent().time}/>:
        <ClubDirectory clubname={props.match.params.clubname}/>);

    return (
        <div className={classes.Clubpage}>
            <NavLink to={"/clubpage/"+props.match.params.clubname} style={{pointerEvents:props.disable ? "none" : ""}}>
                <h1 className={classes.Title}>{props.match.params.clubname}</h1>
            </NavLink>
            <button className={classes.Button}>Join</button>
            <div className={classes.Header}>
                <img className={classes.image} src={getPicture()} alt={''}/>
            </div>
            {view}
            <PeopleList header={props.match.params.eventname ? "People Going" : "Members"}
                        image={props.match.params.eventname ? peoplegoing : clubroster}
                        people={
                [
                    {name : "Tom Sawyer"},
                    {name : "Rose Ann"},
                    {name : "Joanne Twine"}
                    ]
            }/>
            <SearchFooter header = "Suggested Clubs"/>
        </div>
    )
};

export default Clubpage;