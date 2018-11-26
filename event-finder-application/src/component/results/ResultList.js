import React, {Component} from 'react';
import Result from "./Result";

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
            <div name="result-list">
                <ul className="list-group">
                    {
                        this.state.events.map((event, key) =>
                            <Result
                                key={key}
                                event={event}/>
                        )
                    }
                </ul>
            </div>
    )
    }
    }