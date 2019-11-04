import React, {Component} from 'react';
import classes from './Homepage.module.css';
import ClubOutlook from '../../components/ClubOutlook/ClubOutlook';
import EventsOutlook from '../../components/EventsOutlook/EventsOutlook';
import SubHeader from './SubHeader/SubHeader';
import SearchFooter from "../../components/SearchFooter/SearchFooter";

class homepage extends Component {

    render () {
        return (
            <div className={classes.Homepage}>
                <div className={classes.Header}>
                    <SubHeader full>Welcome to Clubs</SubHeader>
                </div>
                <ClubOutlook/>
                <div className={classes.v2}></div>
                <EventsOutlook/>
                <SearchFooter header={"Categories"} search placeholder={"Search by Category"}/>
            </div>
        );
    }
};

export default homepage;