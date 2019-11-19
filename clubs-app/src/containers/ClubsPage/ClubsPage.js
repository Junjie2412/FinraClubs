import React from 'react';
import classes from './ClubsPage.module.css';
import ClubOutlook from "../../components/ClubOutlook/ClubOutlook";
import ClubsList from "./ClubsList/ClubsList";
import SearchFooter from "../../components/SearchFooter/SearchFooter";

const ClubsPage = (props) => {
    return (
        <div className={classes.Clubs}>
            <ClubsList/>
            <ClubOutlook listView Header={"My Groups"}/>
            <SearchFooter header = "Suggested groups"/>
        </div>
    )
};

export default ClubsPage