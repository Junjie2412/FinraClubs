import React from 'react';
import classes from './Events.module.css';
import EventsOutlook from "../../components/EventsOutlook/EventsOutlook";
import EventsList from "./EventsList/EventsList";
import SearchFooter from "../../components/SearchFooter/SearchFooter";

const Events = (props) => {
    return (
        <div className={classes.Events}>
            <EventsList/>
            <EventsOutlook header={"My Events"}/>
            <SearchFooter header = "Suggested Events"/>
        </div>
    )
};

export default Events