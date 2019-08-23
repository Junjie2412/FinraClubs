import React from 'react';
import classes from './EventsPortal.module.css';

const EventsPortal = (props) => {

    //non members - see apply and the top div
    return (
        <div className={classes.EventsPortal}>
            <h1 className={classes.day}>{props.day}</h1>
            <h1 className={classes.month}>{props.month}</h1>
            <div className={classes.imageContainer}>
                <img className={classes.image} alt={''} src={props.image}/>
            </div>
            <h3 className={classes.Header}>
                {props.name}
            </h3>
            <h3 className={classes.Time}>
                {props.time}
            </h3>
        </div>
    )
};

export default EventsPortal;