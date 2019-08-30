import React, {Component} from 'react';
import classes from './Homepage.module.css';
import ClubOutlook from '../../components/ClubOutlook/ClubOutlook';
import EventsOutlook from '../../components/EventsOutlook/EventsOutlook';
import SubHeader from './SubHeader/SubHeader';
import SearchFooter from "../../components/SearchFooter/SearchFooter";
import Modal from "../../components/UI/Modal/Modal";
import interest from '../../assets/INTERESTS-2.png';

class homepage extends Component {

    state = {
        modal: false
    };

    componentDidMount() {

        if (localStorage.getItem('interest')==='true'){
            this.setState({modal:true});
        }
        console.log(this.state.modal);
    }

    close = () => {
        this.setState({modal:false});
        localStorage.removeItem('interest');
    };

    render () {
        return (
            <div className={classes.Homepage}>
                <Modal show={this.state.modal} modalClosed={() => this.close()}>
                    <img src={interest} alt={''}/>
                </Modal>
                <div className={classes.Header}>
                    <SubHeader full>Welcome to Clubs</SubHeader>
                </div>
                <ClubOutlook/>
                <div className={classes.v2}></div>
                <EventsOutlook/>
                <SearchFooter header={"Categories"} search placeholder={"Search by Category"}/>
            </div>
        );
    }
};

export default homepage;