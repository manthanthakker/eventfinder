import React, {Component} from 'react';
import Result from "./Result";
import "./ResultList.css"
import red from "@material-ui/core/es/colors/red";
import ResultCard from "./ResultCard";
import ResultCardList from "./ResultCardList";


export default class ResultList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: props.events
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            events: newProps.events
        })
    }

    render() {
        return (
            <div name="result-list event-search-list">
                <ul className="list-group event-search-list">
                    {
                        this.state.events.map((event, key) =>
                            <ResultCardList
                                key={key}
                                event={event}
                                selectEvent={this.props.selectEvent}
                               />
                        )
                    }
                </ul>
            </div>
        )
    }
}