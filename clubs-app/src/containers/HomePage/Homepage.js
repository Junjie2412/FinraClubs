import React from 'react';
import classes from './Homepage.module.css';
import ClubOutlook from '../../components/ClubOutlook/ClubOutlook';
import EventsOutlook from '../../components/EventsOutlook/EventsOutlook';
import Subheader from './SubHeader/SubHeader';

const homepage = (props) => {
    return (
        <div className={classes.Homepage}>
            <div className={classes.Header}>
                <Subheader buttonText={"Sign Up"}>Find your tribe, <br/> here at FINRA.</Subheader>
                <div className={classes.vl}></div>
                <Subheader buttonText={"Create Club"}>Start your own club, <br/> here at FINRA.</Subheader>
            </div>
            <ClubOutlook/>
            <div className={classes.v2}></div>
            <EventsOutlook/>
        </div>
    );
};

export default homepage;