import React from 'react';
import classes from './ClubOutlook.module.css';
import club from '../../assets/club1.jpg'

const ClubOutlook = (props) => {
    return (
        <div>
            <img src={club} alt={''}
                 width={"40%"}
                 height={"40%"}
                 className={classes.image}
            />
        </div>
    )

};

export default ClubOutlook;