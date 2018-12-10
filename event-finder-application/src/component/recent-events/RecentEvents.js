import React, {Component} from 'react'
import EventService from "../../services/EventService";

export default class RecentEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recentEvents: []
        };
        EventService.getCusstomEvents()
            .then(events => this.setState({
                recentEvents: events
            }));
    }

    render() {
        return(
            <div>
                <h1>Recent Events</ h1>
                <ul>
                {this.state.recentEvents.map((event, key) =>
                    <li>{event.name}</li>
                )}
                </ul>
            </div>
        )
    }

}