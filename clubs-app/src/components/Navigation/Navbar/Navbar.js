import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/ClubLogoGREEN.png';
import classes from './Navbar.module.css';
import {clubs} from '../../../shared/data';
import {events} from '../../../shared/data';
import Aux from '../../../hoc/Auxiliary';
import Dropdown from 'react-bootstrap/Dropdown';
import CreateClubForm from "../../Forms/CreateClubForm/CreateClubForm";
import CreateEventForm from "../../Forms/CreateEventForm/CreateEventForm";

class navbar extends Component {

    state = {
        displayList: "none",
        searchValue: "",
        displayCreateClubModal: false,
        displayCreateEventModal: false
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

    openCreateClubModal = () => {
        this.setState({displayCreateClubModal: true});
    };

    closeCreateClubModal = () => {
        this.setState({displayCreateClubModal: false});
    };

    openCreateEventModal = () => {
        this.setState({displayCreateEventModal: true});
    };

    closeCreateEventModal = () => {
        this.setState({displayCreateEventModal: false});
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
                        <button>
                            <Dropdown alignRight variant={"info"}>
                                <Dropdown.Toggle id="dropdown-custom-1" variant={"secondary"}></Dropdown.Toggle>
                                <Dropdown.Menu className={classes.dropDownMenu}>
                                    <Dropdown.Item eventKey="1" className={classes.dropDownMenuItem} >
                                        <NavLink to={"/profile"}>
                                            My Profile
                                        </NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item className={classes.createClubButton} onClick={this.openCreateClubModal} >
                                        Create Group
                                    </Dropdown.Item>
                                    <Dropdown.Item className={classes.createClubButton} onClick={this.openCreateEventModal} >
                                        Create Event
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className={classes.dropDownMenuItem} eventKey="4"><i className="fas fa-cog"></i> Account Settings</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </button>
                    </div>
                </nav>

                <CreateClubForm
                    modalClosed={this.closeCreateClubModal}
                    show={this.state.displayCreateClubModal}
                />

                <CreateEventForm
                    modalClosed={this.closeCreateEventModal}
                    show={this.state.displayCreateEventModal}
                />
            </Aux>

        );
    }
};

export default navbar;