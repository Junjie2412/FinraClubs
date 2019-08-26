import React from 'react';
import classes from './ClubPage.module.css';
import club0 from '../../assets/club0Book.jpg'
import ClubDirectory from './ClubDirectory/ClubDirectory';
//import club0 from '../../assets/club0 Book.jpg'
import club1 from '../../assets/club1Dance.jpg'
import club2 from '../../assets/club2Astrology.jpg'
import club3 from '../../assets/club3Finance.jpg'
import club4 from '../../assets/club4Group.jpg'
import SearchFooter from "../../components/SearchFooter/SearchFooter";

const Clubpage = (props) => {

    let getPicture = () => {
        console.log(props.match.params.clubname);
        console.log(props.match.params.clubname === "Book Club")
        switch(props.match.params.clubname){
            case "Book Club": return club0;
            case "Dance Group": return club1;
            case "Astrology Society": return club2
            case "Finance Association": return club3;
            case "Adventuring Crew": return club4;
            default: return '';
        }
    };

    console.log(getPicture());

    return (
        <div className={classes.Clubpage}>
            <h1 className={classes.Title}>{props.match.params.clubname}</h1>
            <button className={classes.Button}>Join</button>
            <div className={classes.Header}>
                <img className={classes.image} src={getPicture()} alt={''}/>
            </div>
            <ClubDirectory/>
            <SearchFooter/>
        </div>
    )
};

export default Clubpage;