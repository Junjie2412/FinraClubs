import React, {Component} from 'react';
import classes from './EventsList.module.css'
import EventsPortalBig from './EventsPortalBig/EventsPortalBig';
import {events} from '../../../../shared/data';
import CreateEventForm from "../../../../components/Forms/CreateEventForm/CreateEventForm";

class EventsList extends Component {

    state = {
        events: "upcoming",
        displayModal: false,
        eventSearch: ""
    };

    openModal = () => {
        this.setState({displayModal: true});
    };

    closeModal = () => {
        this.setState({displayModal: false});
    };

    handleChange = events =>{
        this.setState({events: events});
    };

    searchEvents = event => {
        this.setState({eventSearch: event.target.value});
    };

    render() {
        let getClubEvents = () => {
            let list = [];
            for (let event in events){
                if (events[event].clubName === this.props.clubname){
                    list = list.concat(events[event]);
                }
            }
            return list;
        };

        let list = getClubEvents();

        let eventsList = list.map(event => (
            event.eventName.toUpperCase().includes(this.state.eventSearch.toUpperCase()) ? <EventsPortalBig key={event.eventName} image={event.image} clubname={event.clubName} name={event.eventName} time={event.time} day={event.day} month={event.month}/> : null
        ));
        return (
            <div className={classes.CurrentEvents}>
                <div className = {classes.SearchDiv}>
                    <input type={"text"} className={classes.Search} placeholder={'Search events'} onChange={e => this.searchEvents(e)}/>
                    <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
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