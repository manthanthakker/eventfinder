import React, {Component} from 'react';
import EventService from "../../services/EventService";
import ResultList from "../results/ResultList";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            events: []
        };
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

    getQueryData = () => {
        EventService.findQueryEvents(this.state.query)
            .then(events => {
                this.setState({
                    events: events.events
                })
            })
            .then(this.render());
    };

    render() {
        return (
            <div className="row">
                {console.log(this.state.events)}
                <div className="col-3 sidebar"></div>

                <div className="col-6">
                    <div name="search-bar"
                         className="form-group">
                        <input name="search-events"
                               placeholder="Search a city"
                               onChange={this.updateForm}
                               className="form-control"/>
                        <button name="search-query" onClick={() => this.getQueryData()}>
                            Search
                        </button>
                    </div>
                    <ResultList
                        events={this.state.events}/>
                </div>

                <div className="col-3 sidebar"></div>
            </div>
        )
    }
}