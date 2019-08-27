import React from 'react';
import classes from './PeopleList.module.css';
//import Aux from "../../hoc/Auxiliary";

const PeopleList = (props) => {
/*
    const people = props.people.map(people=> (
        <Aux>
            <div className={classes.person}>
                <div className={classes.picture}/>
                <h1 className={classes.name}>{people.name}</h1>
            </div>
        </Aux>
    ));*/

    return (
        <div className={classes.Peoplelist}>
            <h1 className={classes.Header}>{props.header}</h1>
            <div className={classes.line}/>
            <img src={props.image} className={classes.image} alt={""}/>
            {/*people*/}
        </div>
    )
};

export default PeopleList;