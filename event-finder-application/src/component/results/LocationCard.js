import React, {Component} from 'react';
import EventService from '../../services/EventService'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './ResultList.css'

export default class LocationCard extends Component {
    constructor(props) {
        super(props);
        // EventService.findVenue(props.eventid).then((venueObj) => {
        //     venueObj = venueObj.address;
        //     if (venueObj&&venueObj.address_1 && venueObj.city && venueObj.region) {
        //         var address = venueObj.address_1 + " " + venueObj.city + " " + venueObj.region;
        //         this.setState({
        //             location: address
        //         })
        //     }
        // });
        this.state = {
            location: "235 Park Drive"
        };

    }


    render() {
        return (
            <div>
                <FontAwesomeIcon className="icon-padding" icon="map-marker"/>
                {this.state.location}
            </div>
        )
    }
}