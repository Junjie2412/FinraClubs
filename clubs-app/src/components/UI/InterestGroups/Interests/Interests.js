import React from 'react';
import classes from './Interests.module.css';

const Interests = (props) => {
    return (
        <div onClick={props.click} className={[classes.Interest, props.on ? classes.On : ""].join(' ') }>
            <p className={classes.value}>{props.value}</p>
            {props.on ? <i className={"fas fa-check icon"}></i> : <i className={"fas fa-plus icon"}></i>}
        </div>
    );
};

export default Interests;