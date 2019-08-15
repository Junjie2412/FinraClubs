import React from 'react';
import classes from './Homepage.module.css';
import ClubOutlook from '../../components/ClubOutlook/ClubOutlook';

const homepage = (props) => {
    return (
        <div className={classes.Homepage}>
            <h1 className={classes.Header}>Clubs</h1>
            <p className={classes.Subtitle}>Discover your passion</p>
            <ClubOutlook/>
        </div>
    );
};

export default homepage;