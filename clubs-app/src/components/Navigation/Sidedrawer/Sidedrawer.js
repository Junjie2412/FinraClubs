import React from 'react';
import classes from './Sidedrawer.module.css';

const sidedrawer = (props) => {

    return (
        <div className={classes.sidenav}>
            <button>Your Clubs</button>
            <ul>
                <li>
                    <button>Design Community</button>
                    <button>Codebreakers</button>
                </li>
            </ul>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type="text" placeholder={"Search clubs"} className={classes.Search}/>
            <button>Search Results</button>
        </div>
    )

};

export default sidedrawer;