import React from 'react';
import classes from './SubHeader.module.css';

const subheader = (props) => {
    return (
            <div className={props.full ? classes.subHeaderFull : classes.subHeader}>
                <h1 className={classes.HeaderText}>
                    {props.children}
                </h1>
                <button className={classes.Button}>
                    {props.buttonText}
                </button>
            </div>
    );
};

export default subheader;