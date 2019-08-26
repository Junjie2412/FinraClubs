import React, {Component} from 'react';
import classes from './EventsOutlook.module.css';
import Eventsportal from './EventsPortal/EventsPortal';
import club0 from '../../assets/club0Book.jpg'
import club1 from '../../assets/club1Dance.jpg'
import club2 from '../../assets/club2Astrology.jpg'

class EventsOutlook extends Component {

    render() {
        return (
            <div className={classes.EventsOutlook}>
                <h1 className={classes.Header}>Upcoming Events</h1>
                <Eventsportal image={club0} name={"Reading Night"} time={"6:30 PM"} day={11} month={"August"}/>
                <Eventsportal image={club1} name={"Dance Rehearse"} time={"6:30 PM"} day={27} month={"September"}/>
                <Eventsportal image={club2} name={"Horoscopes"} time={"6:30 PM"} day={"01"} month={"April"}/>
            </div>
        )
    }

};

export default EventsOutlook;