import React,{Component} from 'react';
import classes from './ClubsList.module.css'
import CreateClubForm from "../../../components/Forms/CreateClubForm/CreateClubForm";
import {clubs} from '../../../shared/data'
import ClubPortal from "../../../components/ClubOutlook/ClubPortal/ClubPortal";

class ClubsList extends Component{

    state = {
        displayModal: false,
        clubSearch: ""
    };

    openModal = () => {
        this.setState({displayModal: true});
    };

    closeModal = () => {
        this.setState({displayModal: false});
    };

    searchClubs = event => {
        this.setState({clubSearch: event.target.value});
    };

    render() {

        const clubsList = clubs.map(club => (
            <div>
                {club.clubName.toUpperCase().includes(this.state.clubSearch.toUpperCase()) ? <ClubPortal listView key={club.clubName} image={club.image} name={club.clubName}/> : null}
            </div>
        ));

        return (
            <div className={classes.CurrentEvents}>
                <h1 className={classes.title}>Groups</h1>
                <div className={classes.line}/>
                <div className = {classes.SearchDiv}>
                    <i className={["fa fa-search", classes.searchButton].join(' ')}></i>
                    <input type={"text"} className={classes.Search} placeholder={'Search groups'} onChange={e => this.searchClubs(e)}/>
                </div>
                <button className={classes.Button} onClick={this.openModal}>
                    Create Group
                </button>
                <br/>
                {clubsList}
                <CreateClubForm
                    modalClosed={this.closeModal}
                    show={this.state.displayModal}
                />
            </div>
        )
    }
};

export default ClubsList;