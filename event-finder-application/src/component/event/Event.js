import React, {Component} from 'react';
import "./Event.css"
import RawHtml from "../rawhtml/RawHtml.js"

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEvent: props.selectedEvent
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            selectedEvent: newProps.selectedEvent
        })
    }

    render() {
        return (
            <div name="">
                <h1> {this.state.selectedEvent.name.text}</h1>

              {/*  <p>{this.state.selectedEvent.description.html}</p>*/}
                <RawHtml children={this.state.selectedEvent.description.text}></RawHtml>
            </div>
        )
    }
}