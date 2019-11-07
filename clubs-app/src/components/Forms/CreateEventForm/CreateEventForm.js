import React,{Component} from 'react';
import classes from './CreateEventForm.module.css';
import {ProgressBar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle'
import Form from 'react-bootstrap/Form'
import InterestGroups from '../../UI/InterestGroups/InterestGroups';
import EmailsList from '../EmailsList/EmailsList';

class CreateEventForm extends Component {

    state = {
        progress: 0,
        formPart: 1,
        groupName: "",
        location: "",
        description: "",
        interest: "",
        member: "",
        interests: [
            {
                value: "Leadership",
                on: false
            },
            {
                value: "Cyber Security",
                on: false
            },
            {
                value: "Machine Learning",
                on: false
            },
            {
                value: "Public Speaking",
                on: false
            },
            {
                value: "Business",
                on: false
            },
            {
                value: "Product Design",
                on: false
            },
            {
                value: "Data",
                on: false
            },
            {
                value: "Investment Literacy",
                on: false
            },
            {
                value: "Technology",
                on: false
            },
            {
                value: "Stocks",
                on: false
            },
            {
                value: "Sports",
                on: false
            }
        ],
        emails: []
    };

    onUpdateItems = (value) => {
        let list = this.state.interests;
        for (let item of list){
            if (item.value === value){
                item.on = !item.on
            }
        }
        this.setState({interests: list})
    };

    addProgress(progress) {
        this.setState({progress: this.state.progress+progress});
        if (this.state.progress + progress < 0){
            this.setState({progress:0})
        }
        if (this.state.progress + progress > 100){
            this.setState({progress:100})
        }

        if (progress > 0 && this.state.formPart < 4){
            this.setState({formPart: this.state.formPart+1});
        } else if (progress < 0 && this.state.formPart > 1){
            this.setState({formPart: this.state.formPart-1});
        } else {
            this.setState({progress:0, formPart: 1});
            this.props.modalClosed();
        }

        if (this.state.formPart > 4){
            this.setState({formPart: 4})
        }
        if (this.state.formPart  < 1){
            this.setState({formPart: 1})
        }
    }

    setGroupName = event => {
        this.setState({groupName: event.target.value})
    };

    setLocation = event => {
        this.setState({location: event.target.value})
    };
    setInterest = event => {
        this.setState({interest: event.target.value})
    };
    setDescription = event => {
        this.setState({description: event.target.value})
    };
    setMember = event => {
        this.setState({member: event.target.value})
    };
    submit = event => {
        event.preventDefault();
    };
    submit2 = event => {
        event.preventDefault();
        let list = this.state.interests;
        list.push({
            value: this.state.interest,
            on: true
        });
        this.setState({interests: list, interest:""})
    };
    submit3 = event => {
        event.preventDefault();
        let list = this.state.emails;
        list.push({
            value: this.state.member
        });
        this.setState({emails: list, member:""})
    };
    removeEmail = email => {
        let list = this.state.emails;
        let newlist = [];
        for (let item of list){
            if (item.value !== email){
                newlist.push(
                    item
                )
            }
        }
        this.setState({emails: newlist})
    };
    render() {

        let formPart1 = (
            <Form onSubmit={(event) => this.submit(event)} style={{display: this.state.formPart===1 ? "" : "none"}} className={classes.formGroup}>
                <Form.Label className={classes.formLabel}>
                    What is your event's name?
                </Form.Label>
                <Form.Text>
                    Your name doesn't have to be long or serious, have fun, just remember be
                    clear and think of your audience.  Name your event in terms they would understand.
                </Form.Text>
                <Form.Control className={classes.Input} type="input" placeholder="i.e Volunteering" size={'sm'}
                              value={this.state.groupName} onChange={(e) => this.setGroupName(e)}
                              required
                />

                <Form.Label className={classes.formLabel}>
                    Location of event
                </Form.Label>
                <Form.Text>
                    Your location is your main place of gathering, where everyone will go when your event begins.
                </Form.Text>
                <Form.Control className={classes.Input} as="select" placeholder="i.e Women in Tech" size={'sm'}
                              value={this.state.location} onChange={(e) => this.setLocation(e)}>
                    <option value={'Rockville'}>Rockville</option>
                    <option value={'Washington, D.C.'}>Washington, D.C.</option>
                    <option value={'New York'}>New York</option>
                </Form.Control>
            </Form>
        );

        let formPart2=(
            <Form onSubmit={(event) => this.submit2(event)} style={{display: this.state.formPart===2 ? "" : "none"}} className={classes.formGroup}>
                <Form.Label className={classes.formLabel}>
                    Search or select some interests that describe your event.
                </Form.Label>
                <Form.Text>
                    Search from the list or create your own interests from this list.
                </Form.Text>

                <Form.Control className={classes.Input} as="input" rows="3" size={'sm'}
                              value={this.state.interest} onChange={(e) => this.setInterest(e)}
                />

                <InterestGroups interests = {this.state.interests} click={this.onUpdateItems}/>

                <Form.Label className={classes.formLabel}>
                    Describe what your event is about
                </Form.Label>
                <Form.Text>
                    In 500 words or less tell your audience what kind of activities, values, or ideas your
                    event is about.
                </Form.Text>
                <Form.Control className={classes.Input} as="textarea" rows="3" size={'sm'}
                              value={this.state.description} onChange={(e) => this.setDescription(e)}
                />
            </Form>
        );

        let formPart3=(
            <Form onSubmit={(event) => this.submit3(event)} style={{display: this.state.formPart===3 ? "" : "none"}} className={classes.formGroup}>
                <Form.Label className={classes.formLabel}>
                    Invite Members
                </Form.Label>
                <Form.Text>
                    As soon as your event is approved, we will send the invites to these members.
                </Form.Text>
                <Form.Control className={classes.Input} type="email" placeholder="Add email here" size={'sm'}
                              value={this.state.member} onChange={(e) => this.setMember(e)}/>
                <EmailsList emails={this.state.emails} click={this.removeEmail}/>
            </Form>
        );

        let formPart4 = (
            <h1 className={classes.Header} style={{textAlign: "center",display: this.state.formPart===4 ? "" : "none"}}>
                Your event has been submitted!
            </h1>
        );

        return (
            <Modal
                onHide = {this.props.modalClosed}
                show={this.props.show}
                size="lg"
                onExited = {() => this.setState({progress: 0, formPart: 1})}
            >
                <ModalHeader className={classes.Header} closeButton>
                    <ModalTitle>Create Event</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ProgressBar
                        className = {classes.Progress}
                        variant={'warning'}
                        now={this.state.progress}
                    />
                    {formPart1}
                    {formPart2}
                    {formPart3}
                    {formPart4}
                </ModalBody>
                <ModalFooter>
                    <div className={classes.buttonGroup} style={{display: this.state.formPart!==4 ? "" : "none"}}>
                        <button className={classes.leftButton} onClick={() => this.addProgress(-100/3)}>
                            {this.state.formPart === 1 ? "Cancel":"Previous"}
                        </button>
                        <button className={classes.rightButton} onClick={() => this.addProgress(100/3)}>
                            {this.state.formPart === 3 ? "Submit":"Next"}
                        </button>
                    </div>
                    <div className={classes.buttonGroup} style={{display: this.state.formPart===4 ? "" : "none"}}>
                        <button className={classes.CloseButton} onClick={() => this.addProgress(100/3)}>
                            {"Close"}
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        )
    }

};

export default CreateEventForm;