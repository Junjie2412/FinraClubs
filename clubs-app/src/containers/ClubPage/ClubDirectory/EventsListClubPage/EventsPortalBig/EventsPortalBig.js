import React from 'react';
import classes from './EventsPortalBig.module.css';
import {NavLink} from "react-router-dom";

const EventsPortalBig = (props) => {

    //non members - see apply and the top div
    return (
        <NavLink to={"/clubpage/"+props.clubname+"/"+props.name} style={{pointerEvents:props.disable ? "none" : ""}}>
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
        </NavLink>
    )
};

export default EventsPortalBig;