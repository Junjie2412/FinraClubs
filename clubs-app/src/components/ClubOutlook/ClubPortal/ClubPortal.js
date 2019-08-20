import React from 'react';
import classes from './ClubPortal.module.css';

const ClubPortal = (props) => {


    //non members - see apply and the top div
    return (
        <div className={classes.fade} style={{display: props.display}}>
            <h2 className={classes.Title}>{props.title}</h2>
            <img src={props.src} alt="" className={classes.image}/>
            <div className={classes.text}>{props.caption}</div>
        </div>
    )
};

export default ClubPortal;