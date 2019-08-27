import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Auth.module.css';
import logo from "../../assets/ClubLogoGREEN.png";

class Auth extends Component {

    render() {
        return (
            <div className={classes.Auth}>
                <h1 className={classes.Header}>
                    Find your tribe, <br/> here at FINRA.
                </h1>
                <div className={classes.Login}>
                    <img src = {logo}
                         alt = ""
                         width={"40px"}
                         height={"40px"}
                         className={classes.logo}
                    />
                    <h1 className={classes.LoginHeader}>
                        Clubs
                    </h1>
                    <input type={"text"} placeholder={"Email"} className={classes.Input}/>
                    <input type={"password"} placeholder={"Password"} className={[classes.Input, classes.InputPassword].join(' ')}/>
                    <input type={"checkbox"} className={classes.Check}/>
                    <p className={classes.Certify}>By checking this box I certify that I have read, understood, and accepted the
                        <a href={'http://www.finra.org/finra-website-privacy-policy'} target={"_blank"}> terms and conditions of use</a></p>
                    <NavLink to={"/home"} style={{textDecoration: "none"}}>
                        <button className={classes.Button}>
                            Log In
                        </button>
                    </NavLink>
                    <a href={'/'} style={{"display": "block"}}>Forgot user email or password?</a>
                    <div className={classes.Divider}/>
                    <div className={classes.Or}>Or</div>
                    <div className={classes.Divider}/>
                    <button className={classes.Button}>
                        Sign Up
                    </button>
                </div>
            </div>
        )
    }
};

export default Auth;