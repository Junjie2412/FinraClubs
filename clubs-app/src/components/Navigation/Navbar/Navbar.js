import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/ClubLogoGREEN.png';
import classes from './Navbar.module.css';
import {clubs} from '../../../shared/data';
import {events} from '../../../shared/data';
import Aux from '../../../hoc/Auxiliary';

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

            <Aux>
                <nav className={classes.topnav}>
                    <NavLink to={"/home"}>
                        <button>
                            <img src = {logo}
                                 alt = ""
                                 width={"50px"}
                                 height={"50px"}
                                 style={{margin: "-10% 20% 0 10%"}}
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

                        <NavLink to={"/events"}>
                            <button style={{marginRight: "30px", marginLeft: "60px", fontWeight: "bold"}}>
                                Events
                            </button>
                        </NavLink>

                        <NavLink to={"/clubs"}>
                            <button style={{marginRight: "60px", marginLeft: "30px", fontWeight: "bold"}}>
                                Groups
                            </button>
                        </NavLink>
                        {/*
                    <button className={classes.bell}>
                        <i className="far fa-bell"></i>
                    </button>*/}
                        <NavLink to={"/profile"}>
                            <button>
                                Hill, Danielle
                            </button>
                        </NavLink>
                        <button>
                            <i className={"fas fa-user-circle"}></i>
                        </button>
                        {/*
                    <button>
                        <i className="fas fa-chevron-down"></i>
                    </button>*/}
                    </div>
                </nav>
            </Aux>

        );
    }
};

export default navbar;