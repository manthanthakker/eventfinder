import React from 'react';
import "./Result.css"

const Result = ({key, event}) =>
    <li className="list-group-item row search-result">
        <a className="col-8" href={event.url}>
            {event.name.text}
        </a>
    </li>

export default Result

