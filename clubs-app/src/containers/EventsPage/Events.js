import React from 'react';
import classes from './Events.module.css';
import EventsPortalBig from './EventsPortalBig/EventsPortalBig';
import club0 from '../../assets/club0Book.jpg'
import club1 from '../../assets/club1Dance.jpg'
import club2 from '../../assets/club2Astrology.jpg'
import club3 from '../../assets/club3Finance.jpg'
import SearchFooter from "../../components/SearchFooter/SearchFooter";
import EventsOutlook from "../../components/EventsOutlook/EventsOutlook";

const Events = (props) => {
    return (
        <div className={classes.Events}>
            <div className={classes.CurrentEvents}>
                <h1 className={classes.title}>Events</h1>
                <div className={classes.line}/>
                <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
                <input type={"text"} className={classes.Search} placeholder={'Search events'}/>
                <br/>
                <EventsPortalBig image={club0} name={"Reading Night"} time={"6:30 PM"} day={11} month={"August"}/>
                <EventsPortalBig image={club1} name={"Dance Rehearse"} time={"6:30 PM"} day={27} month={"September"}/>
                <EventsPortalBig image={club2} name={"Horoscopes"} time={"6:30 PM"} day={"01"} month={"April"}/>
                <EventsPortalBig image={club3} name={"Market Manipulation"} time={"2:30 PM"} day={"11"} month={"March"}/>
            </div>
            <EventsOutlook/>
            <SearchFooter/>
        </div>
    )
}

export default Events