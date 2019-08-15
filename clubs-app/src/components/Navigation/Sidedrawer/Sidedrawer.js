import React from 'react';
import classes from './Sidedrawer.module.css';

const sidedrawer = (props) => {

    return (
        <div className={classes.sidenav}>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type="text" placeholder={"Search clubs"} className={classes.Search}/>
            <button>Your Clubs</button>
            <button>Search Results</button>
        </div>
    )

};

export default sidedrawer;