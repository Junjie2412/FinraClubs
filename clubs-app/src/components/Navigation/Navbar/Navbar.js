import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import classes from './Navbar.module.css';

const navbar = (props) => {



    return (


        <nav className={classes.topnav}>
            <button>
                <img src = {logo}
                     alt = ""
                     width={"40px"}
                     height={"40px"}
                />
            </button>
            <button>Clubs</button>

            <div className={classes["topnav-right"]}>
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