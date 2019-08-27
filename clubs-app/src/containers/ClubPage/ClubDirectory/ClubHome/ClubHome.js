import React from 'react';
import classes from './ClubHome.module.css';
import {clubs} from "../../../../shared/data";

const ClubHome = (props) => {

    let getDescription = () => {
        var found = clubs.find(function(element) {
            return element.clubName === props.clubname;
        });
        return found.description;
    };

    return (
        <div className={classes.ClubHome}>
            <h1 className={classes.Header}>About</h1>
            <p className={classes.about}>
                {getDescription()}
            </p>
        </div>
    )

};

export default ClubHome