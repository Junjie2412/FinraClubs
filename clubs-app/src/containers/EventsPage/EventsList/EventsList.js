import React from 'react';
import classes from './EventsList.module.css'
import EventsPortalBig from "../EventsPortalBig/EventsPortalBig";
import {events} from '../../../shared/data'

const EventsList = (props) => {

    const eventsList = events.map(event => (

        <EventsPortalBig click = {console.log(event)} key={event.eventName} image={event.image} name={event.eventName} time={event.time} clubname = {event.clubName} day={event.day} month={event.month}/>
    ));

    return (
        <div className={classes.CurrentEvents}>
            <h1 className={classes.title}>Events</h1>
            <div className={classes.line}/>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type={"text"} className={classes.Search} placeholder={'Search events'}/>
            <br/>
            {eventsList}
            </div>
    )
};

export default EventsList;