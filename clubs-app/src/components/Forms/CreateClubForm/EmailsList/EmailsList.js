import React from 'react';
import classes from './Emails.module.css';

const EmailsList = (props) => {

    let emails = props.emails.map(email => (
        <div
            className={classes.email}
            key = {email.value}
            onClick={() => props.click(email.value)}
        ><p className = {classes.value}>{email.value}</p>
            <i className={"fas fa-user-times icon"} onClick={() => props.click(email.value)}/>
        </div>
    ));

    return (
        <div className={classes.Emails}>
            {emails}
        </div>
    );
};

export default EmailsList;