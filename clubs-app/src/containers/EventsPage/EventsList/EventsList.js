import React,{Component} from 'react';
import classes from './EventsList.module.css'
import EventsPortalBig from "../EventsPortalBig/EventsPortalBig";
import {events} from '../../../shared/data'
import CreateEventForm from '../../../components/Forms/CreateEventForm/CreateEventForm';

class EventsList extends Component{

    state = {
        displayModal: false,
        eventSearch: ""
    };

    openModal = () => {
        this.setState({displayModal: true});
    };

    closeModal = () => {
        this.setState({displayModal: false});
    };

    searchEvents = event => {
        this.setState({eventSearch: event.target.value});
    };

    render() {
        const eventsList = events.map(event => (
            event.eventName.toUpperCase().includes(this.state.eventSearch.toUpperCase()) ? <EventsPortalBig click = {console.log(event)} key={event.eventName} image={event.image} name={event.eventName} time={event.time} clubname = {event.clubName} day={event.day} month={event.month}/> : null
        ));

        return (
            <div className={classes.CurrentEvents}>
                <h1 className={classes.title}>Events</h1>
                <div className={classes.line}/>
                <div className = {classes.SearchDiv}>
                    <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
                    <input type={"text"} className={classes.Search} placeholder={'Search events'} onChange={e => this.searchEvents(e)}/>
                </div>
                <button className={classes.Button} onClick={this.openModal}>
                    Create Event
                </button>
                <br/>
                {eventsList}
                <CreateEventForm
                    modalClosed={this.closeModal}
                    show={this.state.displayModal}
                />
            </div>
        )
    }
};

export default EventsList;