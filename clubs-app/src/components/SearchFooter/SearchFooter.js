import React from 'react';
import classes from './SearchFooter.module.css';
import Clubportal from "../ClubOutlook/ClubPortal/ClubPortal";
import club0 from '../../assets/club0.jpg';
import club1 from '../../assets/club1.jpg';
import club2 from '../../assets/club3.jpg';

const SearchFooter = (props) => {

    return(
        <div className={classes.SearchFooter}>
            <h1 className={classes.Header}>{props.header}</h1>
            <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
            <input type={"text"} className={classes.Search} placeholder={'Search by Category'}/>
            <br/>
            <Clubportal image={club0} name={"Literature"} small full disable/>
            <Clubportal image={club1} name={"Art"} small full disable/>
            <Clubportal image={club2} name={"Finance"} small full disable/>
        </div>

    );

};

export default SearchFooter;

