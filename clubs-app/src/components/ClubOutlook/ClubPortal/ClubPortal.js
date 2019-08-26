import React from 'react';
import classes from './ClubPortal.module.css';
import {NavLink} from 'react-router-dom';

const ClubPortal = (props, context) => {

    //non members - see apply and the top div
    return (
        <NavLink to={"/clubpage/"+props.name} style={{"pointer-events":props.disable ? "none" : ""}}>
            <div className={[props.small ? classes.ClubPortalSmall : classes.ClubPortal,props.full ? classes.Full: ""].join(" ")}>
                {/*
                <div className={classes.overlay}>
                    <NavLink to={"/clubpage/"+props.name} className={classes.overlayLink}>
                        <button className={classes.overlayButton}>
                            Go!
                        </button>
                    </NavLink>
                </div>*/}
                <div className={classes.imageContainer}>
                    <img className={classes.image} alt={''} src={props.image}/>
                </div>
                <h3 className={[props.small ? classes.HeaderSmall : classes.Header,
                                props.full ? classes.HeaderFull: ""].join(' ')}>
                    {props.name}
                </h3>
            </div>
        </NavLink>
    )
};

export default ClubPortal;