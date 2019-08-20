import React from 'react';
import classes from './ClubPage.module.css';

const Clubpage = (props) => {

    return (
        <div className={classes.row}>
            {/*Club Name and Join/Apply button*/}
            <div className={classes.Header}>
                {/*Club Name*/}
                <h1>
                    Book Club
                </h1>
                {/*Buttons*/}
                <button>APPLY</button>
            </div>

            {/*Club Info and Events*/}
            <div>
                {/*Club Info*/}
                <div></div>
                {/*Events*/}
                <div></div>
            </div>

            {/*Posts*/}
            <div>

            </div>
        </div>
    )
}

export default Clubpage;