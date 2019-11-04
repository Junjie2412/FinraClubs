import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/ClubLogoGREEN.png';
import classes from './Navbar.module.css';
import {clubs} from '../../../shared/data'
import {events} from '../../../shared/data'

class navbar extends Component {

    state = {
        displayList: "none",
        searchValue: ""
    };

    componentWillMount () {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        this.setState({displayList: "none"});
    };


    enterSearch = (event) => {
        this.setState({searchValue: event.target.value});
        if (event.target.value.length > 2){
            this.setState({displayList: "block"});
        } else {
            this.setState({displayList: "none"});
        }
    };

    render () {

        let clubsList = clubs.slice(0, 10).map(club => (
            <li
                key={club.clubName}
                className={classes.searchListItem}
                style={{display: club.clubName.toLowerCase().includes(this.state.searchValue.toLowerCase()) ? "block" : "none"}}
            >
                <NavLink
                    to={"/clubpage/"+club.clubName}
                    className={classes.searchLink}
                    onClick={() => this.setState({displayList: "none"})}
                >
                    {club.clubName}
                </NavLink>
            </li>
        ));

        let eventsList = events.slice(0, 10).map(event => (
            <li
                key={event.eventName}
                className={classes.searchListItem}
                style={{display: event.eventName.toLowerCase().includes(this.state.searchValue.toLowerCase()) ? "block" : "none"}}
            >
                <NavLink
                    to={"/clubpage/"+event.clubName+"/"+event.eventName}
                    className={classes.searchLink}
                    onClick={() => this.setState({displayList: "none"})}
                >
                    {event.eventName}
                </NavLink>
            </li>
        ));

        return (

            <nav className={classes.topnav}>
                <NavLink to={"/home"}>
                    <button>
                        <img src = {logo}
                             alt = ""
                             width={"40px"}
                             height={"40px"}
                        />
                    </button>
                    <button>Clubs</button>
                </NavLink>

                <div className={classes["topnav-right"]}>
                    <i className={["fa fa-search", classes.searchButton].join(' ')}/>
                    <input
                        type={"text"} placeholder={'Search for your tribe'}
                        onClick={(e) => this.enterSearch(e)}
                        value={this.state.searchValue}
                        onChange={(e) => this.enterSearch(e)}
                    />

                    <ul ref={node => this.node = node} style={{"display":this.state.displayList}} className={classes.searchList}>
                        <li className={classes.searchListHeader}>
                            Clubs
                        </li>
                        {clubsList}
                        <li className={classes.searchListHeader}>
                            Events
                        </li>
                        {eventsList}
                    </ul>

                    <button className={classes.createClubButton}>
                        Create Club
                    </button>
                    <NavLink to={"/Events"}>
                        <button style={{marginRight: "40px", marginLeft: "40px"}}>
                            Events
                        </button>
                    </NavLink>
                    {/*
                <button className={classes.bell}>
                    <i className="far fa-bell"></i>
                </button>*/}
                    <button>User Name</button>
                    <button>
                        <i className={"fas fa-user-circle"}></i>
                    </button>
                    {/*
                <button>
                    <i className="fas fa-chevron-down"></i>
                </button>*/}
                </div>
            </nav>

        );
    }
};

export default navbar;