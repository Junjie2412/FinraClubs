import React, {Component} from 'react';
import classes from './EventsOutlook.module.css';
import Eventsportal from './EventsPortal/EventsPortal';
import {events} from '../../shared/data';

class EventsOutlook extends Component {

    render() {

        const eventsList = events.slice(3, 6).map(event => (
            <Eventsportal key={event.eventName} image={event.image} name={event.eventName} time={event.time} clubname = {event.clubName} day={event.day} month={event.month}/>
        ));
        return (
            <div className={classes.EventsOutlook}>
                <h1 className={classes.Header}>Upcoming Events</h1>
                {eventsList}
            </div>
        )
    }

};

export default EventsOutlook;