import React, {Component} from 'react';
import classes from './ClubOutlook.module.css';
import Clubportal from './ClubPortal/ClubPortal';
import club0 from '../../assets/club0.jpg'
import club1 from '../../assets/club1.jpg'
import club2 from '../../assets/club2.jpg'
import club3 from '../../assets/club3.jpg'
import club4 from '../../assets/club4.jpg'

class ClubOutlook extends Component {

    render() {
        return (
            <div className={classes.ClubOutlook}>
                <h1 className={classes.Header}>Featured Clubs</h1>
                <Clubportal image={club0} name={"Book Club"} />
                <Clubportal image={club1} name={"Dance Group"} small/>
                <Clubportal image={club2} name={"Astrology Society"} small/>
                <Clubportal image={club3} name={"Finance Association"} small/>
                <Clubportal image={club4} name={"Adventuring Crew"} small/>
            </div>
        )
    }

};

export default ClubOutlook;