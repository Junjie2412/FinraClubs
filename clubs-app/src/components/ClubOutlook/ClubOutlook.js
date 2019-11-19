import React, {Component} from 'react';
import classes from './ClubOutlook.module.css';
import Clubportal from './ClubPortal/ClubPortal';
import {clubs} from '../../shared/data'

class ClubOutlook extends Component {

    render() {

        let clubsList = this.props.listView ?
            clubs.slice(2, 5).map(club => (
                <Clubportal key={club.clubName} image={club.image} name={club.clubName} small listView/>
            ))
        : clubs.slice(0, 5).map(club => (
            <Clubportal key={club.clubName} image={club.image} name={club.clubName} small={clubs.indexOf(club) !== 0}/>
        ));

        return (
            <div className={this.props.listView ? classes.ClubOutlookListView : classes.ClubOutlook}>
                <h1 className={this.props.listView ? classes.HeaderListView : classes.Header}>{this.props.Header}</h1>
                {clubsList}
            </div>
        )
    }

};

export default ClubOutlook;