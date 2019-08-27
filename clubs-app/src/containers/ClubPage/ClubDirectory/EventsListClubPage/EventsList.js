import React from 'react';
import classes from './EventsList.module.css'
import EventsPortalBig from './EventsPortalBig/EventsPortalBig';
import {events} from '../../../../shared/data';

const EventsList = (props) => {

    let getClubEvents = () => {
        let list = [];
        for (let event in events){
            if (events[event].clubName === props.clubname){
                list = list.concat(events[event]);
            }
        }
        return list;
    };

    let list = getClubEvents();

    let eventsList = list.map(event => (
        <EventsPortalBig key={event.eventName} image={event.image} clubname={event.clubName} name={event.eventName} time={event.time} day={event.day} month={event.month}/>
    ));
    return (
        <div className={classes.CurrentEvents}>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type={"text"} className={classes.Search} placeholder={'Search events'}/>
            <br/>
            {eventsList}
        </div>
    )
};

export default EventsList;