import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import classes from './Navbar.module.css';

const navbar = (props) => {

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
                    <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
                    <input type={"text"} placeholder={'Search for your tribe'}/>

                <NavLink to={"/Events"}>
                    <button style={{marginRight: "40px", marginLeft: "40px"}}>
                        Events
                    </button>
                </NavLink>
                <button>User Name</button>
                <button>
                    <i className={"fas fa-user-circle"}></i>
                </button>
                <button>
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
        </nav>

    );
};

export default navbar;