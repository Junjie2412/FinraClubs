import React from 'react';
import classes from './SearchFooter.module.css';
import Clubportal from "../ClubOutlook/ClubPortal/ClubPortal";
import club0 from '../../assets/club0MachineLearning.jpg';
import club1 from '../../assets/club3Createathon.jpg';
import club2 from '../../assets/club1Finance.jpg';
import Aux from '../../hoc/Auxiliary';

const SearchFooter = (props) => {

    let search = (props.search ?
        <Aux>
        <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
        <input type={"text"} className={classes.Search} placeholder={props.placeholder}/>
        </Aux>: ""
    );

    return(
        <div className={classes.SearchFooter}>
            <h1 className={classes.Header}>{props.header}</h1>
            {search}
            <br/>
            <Clubportal image={club0} name={"Literature"} small full disable/>
            <Clubportal image={club1} name={"Art"} small full disable/>
            <Clubportal image={club2} name={"Finance"} small full disable/>
        </div>

    );

};

export default SearchFooter;

