import React from 'react';

const Result = ({key, event}) =>
    <li className="list-group-item row">
        <a className="col-8" href={event.url}>
            {event.name.text}
        </a>
    </li>

export default Result

