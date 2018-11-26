import React, {Component} from 'react';
import EventService from "../../services/EventService";
import ResultList from "../results/ResultList";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../util.css'
import Spinner from "../spinner/Spinner";


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            events: [],
            spinner: true
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

    render() {
        return (
            <div className="row">
                <div className="col-3 sidebar"></div>
                <div className="col-6">
                    <div name="search-bar"
                         className="form-inline">
                        <div className="col-10">
                            <input name="search-events"
                                   placeholder="Search a city"
                                   onChange={this.updateForm}
                                   className="form-control search-input"/>
                        </div>
                        <div className="col-2">
                            <FontAwesomeIcon icon="search" size="2x" name="search-query"
                                             onClick={() => this.getQueryData()}/>
                        </div>
                        <div className="col-12">
                            <Spinner hidden={this.state.spinner}/>
                            <ResultList
                                events={this.state.events}/>
                        </div>

                    </div>
                </div>


                <div className="col-3 sidebar"></div>
            </div>
        )
    }
}