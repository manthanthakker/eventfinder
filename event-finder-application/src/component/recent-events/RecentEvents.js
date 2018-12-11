import React, {Component} from 'react'
import EventService from "../../services/EventService";
import EventCard from "./EventCard";

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
                    <EventCard
                        index={key}
                        event={event}/>
                )}
                </ul>
            </div>
        )
    }

}