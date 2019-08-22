import React from 'react';
import classes from './ClubPortal.module.css';

const ClubPortal = (props) => {

    //non members - see apply and the top div
    return (
        <div className={props.small ? classes.ClubPortalSmall : classes.ClubPortal}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.image}/>
            </div>
            <h3 className={props.small ? classes.HeaderSmall : classes.Header}>
                {props.name}
            </h3>
        </div>
    )
};

export default ClubPortal;