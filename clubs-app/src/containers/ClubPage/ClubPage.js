import React from 'react';
import classes from './ClubPage.module.css';

const Clubpage = (props) => {

    return (
        <div className={classes.Clubpage}>
            <h1>Hello this is the Club Page for {props.match.params.clubname}</h1>
        </div>
    )
};

export default Clubpage;