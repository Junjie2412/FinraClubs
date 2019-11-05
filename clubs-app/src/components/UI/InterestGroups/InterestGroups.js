import React from 'react';
import classes from './InterestGroups.module.css';
import Interests from './Interests/Interests';

const InterestGroups = (props) => {

    let interests = props.interests.map(interest => (
        <Interests key = {interest.value} on={interest.on ? true : false} value={interest.value} click={() => props.click(interest.value)}/>
    ))

    return (
        <div className={classes.InterestGroups}>
            {interests}
        </div>
    );
};

export default InterestGroups;