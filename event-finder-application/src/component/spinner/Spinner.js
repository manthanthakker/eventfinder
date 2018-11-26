import React, {Component} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../util.css'


export default class Spinner extends Component {
    constructor(props) {
       super(props);
    }

    render() {
        debugger;
        if (this.props.hidden) {

            return (
                <div class="">
                    <FontAwesomeIcon className="spinner" icon="snowflake" spin size="2x" color="red" rotation={270} flip="both"/>
                </div>)
        }else{
            return (<div></div>)
        }
    }
}


