import React from 'react';
import classes from './Homepage.module.css';
import ClubOutlook from '../../components/ClubOutlook/ClubOutlook';
import EventsOutlook from '../../components/EventsOutlook/EventsOutlook';
import SubHeader from './SubHeader/SubHeader';
import SearchFooter from "../../components/SearchFooter/SearchFooter";

const homepage = (props) => {
    return (
        <div className={classes.Homepage}>
            <div className={classes.Header}>
                <SubHeader buttonText={"Sign Up"}>Find your tribe, <br/> here at FINRA.</SubHeader>
                <div className={classes.vl}></div>
                <SubHeader buttonText={"Create Club"}>Start your own club, <br/> here at FINRA.</SubHeader>
            </div>
            <ClubOutlook/>
            <div className={classes.v2}></div>
            <EventsOutlook/>
            <SearchFooter header={"Categories"}/>
        </div>
    );
};

export default homepage;