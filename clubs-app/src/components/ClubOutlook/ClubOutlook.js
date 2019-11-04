import React, {Component} from 'react';
import classes from './ClubOutlook.module.css';
import Clubportal from './ClubPortal/ClubPortal';
import {clubs} from '../../shared/data'

class ClubOutlook extends Component {

    render() {

        let clubsList = clubs.slice(0, 5).map(club => (
            <Clubportal key={club.clubName} image={club.image} name={club.clubName} small={clubs.indexOf(club) !== 0}/>
        ));

        return (
            <div className={classes.ClubOutlook}>
                <h1 className={classes.Header}>Featured Clubs</h1>
                {clubsList}
            </div>
        )
    }

};

export default ClubOutlook;