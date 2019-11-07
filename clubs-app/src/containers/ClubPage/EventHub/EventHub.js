import React, {Component} from 'react';
import classes from './EventHub.module.css';
import Chat from "../../../components/Chat/Chat";

class EventHub extends Component {

    state = {
        rsvp: ""
    };

    render() {
        return (
            <div className={classes.EventHub}>
                <div>
                    <div className={classes.date}>
                        <h1 className={classes.day}>{this.props.day}</h1>
                        <h1 className={classes.month}>{this.props.month}</h1>
                        <h1 className={classes.Time}>{this.props.time}</h1>
                    </div>
                    <div className={classes.event}>
                        <h1 className={classes.eventName}>
                            {this.props.eventname}
                        </h1>
                        <button className={this.state.rsvp==="Going" ? [classes.Button, classes.ButtonOn].join(' ') : classes.Button}
                                onClick={() => this.setState({rsvp: "Going"})}>
                            <p style={{display:"inline-block"}}>Going</p>
                        </button>
                        <button className={this.state.rsvp==="Tentative" ? [classes.Button, classes.ButtonOn].join(' ') : classes.Button}
                                onClick={() => this.setState({rsvp: "Tentative"})}>
                            <p style={{display:"inline-block"}}>Tentative</p>
                        </button>
                        <button className={this.state.rsvp==="Cannot Go" ? [classes.Button, classes.ButtonOn].join(' ') : classes.Button}
                                onClick={() => this.setState({rsvp: "Cannot Go"})}>
                            <p style={{display:"inline-block"}}>Can't Go</p>
                        </button>
                    </div>
                </div>

                <div className={classes.line}/>

                <h1 className={classes.Header}>About</h1>
                <p className={classes.about}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    {'\n\n'}
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <h1 className={classes.Header}>Location</h1>
                <p className={classes.about}>Rockville </p>

                <div className={classes.line}/>
                <Chat title={"Comments"}/>
            </div>

        );
    }
};

export default EventHub;