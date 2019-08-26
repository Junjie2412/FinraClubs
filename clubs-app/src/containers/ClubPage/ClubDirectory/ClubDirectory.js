import React, {Component} from 'react';
import classes from './ClubDirectory.module.css';
import ClubHome from './ClubHome/ClubHome';
import Aux from '../../../hoc/Auxiliary';
import Chat from '../../../components/Chat/Chat'

class ClubDirectory extends Component {

    state = {
        view: "home"
    };



    render() {

        let view = (this.state.view === "home" ?
            <Aux>
                <ClubHome/>
                <div className={classes.line}/>
                <Chat title={"Chat"}/>
                <div className={classes.line}/>
            </Aux>
                :
            <Aux>
            </Aux>
    );

        return (
            <div className={classes.ClubDirectory}>
                <div className={classes.Tabs}>
                    <button>Home</button>
                    <button>Events</button>
                </div>
                <div className={classes.line}/>
                {view}
            </div>
        )
    }

};

export default ClubDirectory;