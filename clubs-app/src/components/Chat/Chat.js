import React from 'react';
import classes from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={classes.Chat}>
            <h3 className={classes.title}>{props.title}</h3>
            <textarea type={"text"} className={classes.input}/>
            <button className={classes.Button}>
                Add Comment
            </button>
        </div>
    )
}

export default Chat;