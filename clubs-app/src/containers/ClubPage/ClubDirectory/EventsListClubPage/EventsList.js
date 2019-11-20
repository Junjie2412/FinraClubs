import React, {Component} from 'react';
import classes from './EventsList.module.css'
import EventsPortalBig from './EventsPortalBig/EventsPortalBig';
import {events} from '../../../../shared/data';
import CreateEventForm from "../../../../components/Forms/CreateEventForm/CreateEventForm";

class EventsList extends Component {

    state = {
        events: "upcoming",
        toggle: "0%",
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

    toggle = pos => {
        this.setState({toggle: pos});
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
                <div className={classes.ToolBar}>
                    <button className={classes.Toggle}>
                        <button style={{left: this.state.toggle}}/>
                        <div style={{left: "0%"}} onClick={() => this.toggle("0%")}>
                            All
                        </div>
                        <div style={{left: "33.5%"}} onClick={() => this.toggle("33.5%")}>
                            Upcoming
                        </div>
                        <div style={{left: "67.2%"}} onClick={() => this.toggle("67.2%")}>
                            Past
                        </div>
                    </button>
                    <div className = {classes.SearchDiv}>
                        <input type={"text"} className={classes.Search} placeholder={'Search events'} onChange={e => this.searchEvents(e)}/>
                        <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
                    </div>
                    <button className={classes.Button} onClick={this.openModal}>
                        Create Event
                    </button>
                </div>
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