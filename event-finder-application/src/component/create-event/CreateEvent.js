import React, {Component} from 'react'
import EventService from "../../services/EventService";

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventDescription: '',
            eventStart: '',
            eventEnd: '',
            eventDate: '',
            eventLocation: '',
            eventCategory: ''
        }
    }

    updateInputFields = event => {
        switch(event.target.id) {
            case "event-name":
                this.setState({
                    eventName: event.target.value
                });
                break;
            case "description":
                this.setState({
                    eventDescription: event.target.value
                });
                break;
            case "event-loc":
                this.setState({
                    eventLocation: event.target.value
                });
                break;
            case "event-date":
                this.setState({
                    eventDate: event.target.value
                });
                break;
            case "start-time":
                this.setState({
                    eventStart: event.target.value
                });
                break;
            case "end-time":
                this.setState({
                    eventEnd: event.target.value
                });
                break;
            default:
                this.setState({
                    eventCategory: event.target.value
                });
        }
    };

    createEvent = () => {
        let newEvent = {
            name: this.state.eventName,
            description: this.state.eventDescription,
            category: this.state.eventCategory,
            location: this.state.eventLocation,
            startTime: this.state.eventStart,
            endTime: this.state.eventEnd,
            date: this.state.eventDate
        };
        EventService.createEvent(newEvent)
            .then(alert("Event Created"))
    };

    render() {
        return(
            <div>
                <div className="container">
                    <div className="form-group">
                        <h1>Create Event</h1>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="event-name"
                                   className="control-label">
                                Event Name
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="text"
                                   className="form-control"
                                   onChange={this.updateInputFields}
                                   id="event-name"
                                   placeholder="Name Your Event"
                                   required/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="description"
                                   className="control-label">
                                Event Description
                            </label>
                        </div>
                        <div className="col-10">
                            <textarea type="text"
                                      className="form-control"
                                      onChange={this.updateInputFields}
                                      id="description"
                                      placeholder="Describe Your Event"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="category"
                                   className="control-label">
                                Event Description
                            </label>
                        </div>
                        <div className="col-10">
                            <select className="form-control"
                                    onChange={this.updateInputFields}
                                    id="category">
                                <option value="110">Utensils</option>
                                <option value="103">Music</option>
                                <option value="105">Paint</option>
                                <option value="104">Film</option>
                            </select>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="event-loc"
                                   className="control-label">
                                Event Location
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="text"
                                   className="form-control"
                                   onChange={this.updateInputFields}
                                   id="event-loc"
                                   placeholder=""
                                   required/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="event-date"
                                   className="control-label">
                                Event Date
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="date"
                                   className="form-control"
                                   onChange={this.updateInputFields}
                                   id="event-date"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="start-time"
                                   className="control-label">
                                Event Start Time
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="time"
                                   className="form-control"
                                   onChange={this.updateInputFields}
                                   id="start-time"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="end-time"
                                   className="control-label">
                                Event End Time
                            </label>
                        </div>
                        <div className="col-10">
                            <input type="time"
                                   className="form-control"
                                   onChange={this.updateInputFields}
                                   id="end-time"/>
                        </div>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col">
                            <button className="btn btn-primary" onClick={() => this.createEvent()}>
                                Create Event
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}