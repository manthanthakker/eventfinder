import React, {Component} from 'react';
import EventService from "../../services/EventService";
import ResultList from "../results/ResultList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../util.css'
import Spinner from "../spinner/Spinner";
import Searchbar from "./Searchbar";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Event from "../event/Event";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            events: [],
            spinner: true,
            selectedEvent: {'name':{'text':''},'description':{'html':'','text':''}}
        };
        this.getQueryData();
    }


    updateForm = event =>
        this.setState({
            query: event.target.value,
        });


    getAllData = () => {
        EventService.findAllEvents()
            .then(events => {
                this.setState({
                    events: events.events
                })
            })
            .then(this.render());
    };

    showSpinner = () => {
        this.setState({
            spinner: true
        });
    };
    unshowSpinner = () => {
        this.setState({
            spinner: false
        });
    };

    getQueryData = () => {
        this.showSpinner();
        debugger;
        EventService.findQueryEvents(this.state.query)
            .then(events => {
                this.setState({
                    events: events.events
                })
                this.unshowSpinner();
            })
            .then(this.render());
    };
    selectEvent = (eventId) => {
        debugger;
        this.showSpinner();
        EventService.findEvent(eventId)
            .then(event => {
                debugger;
                this.setState({
                    selectedEvent: event
                });

                this.unshowSpinner();
            });
    }


    render() {
        return (
            <div className="row">
                <div className="col-3 sidebar"></div>
                <div className="col-6">
                    <Router>
                        <div>
                            <Link to="/"></Link>
                            <Route path='/'
                                   render={() =>
                                       <Searchbar
                                           updateForm={this.updateForm}
                                           getQueryData={this.getQueryData}
                                           spinner={this.state.spinner}
                                           events={this.state.events}
                                           selectEvent={this.selectEvent}/>}
                            />
                            <Link to="/event"></Link>
                            <Route path='/event'
                                   render={() =>
                                       <Event
                                           selectedEvent={this.state.selectedEvent}/>}
                            />
                        </div>
                    </Router>

                    {/*</Searchbar>*/}

                </div>

                <div className="col-3 sidebar"></div>
            </div>
        )
    }
}