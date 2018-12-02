import React from 'react';
import "./Result.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Result = ({key, event, selectEvent}) => {
    function renderImage(event) {
        if (event.logo && event.logo.url) {
            return <img className={"logo "} src={event.logo.url}></img>
        }
    }

    function renderCategoryLogo(event) {
        debugger;
        if (event.category_id) {
            if (event.category_id == "110") {
               return <FontAwesomeIcon className="pull-right" icon="utensils"/>;
            }
            if (event.category_id == "103") {
                return <FontAwesomeIcon className="pull-right" icon="music"/>;
            }
            if (event.category_id == "105") {
                return <FontAwesomeIcon className="pull-right" icon="paint"/>;
            }
            if (event.category_id == "104") {
                return <FontAwesomeIcon className="pull-right" icon="film"/>;
            }
        }
       // return <FontAwesomeIcon className="" icon="utensils"/>;
    }

    return (
        <li className="list-group-item row search-result">
            {renderImage(event)}

            <Link className="col-8" to="/event" onClick={() =>
                selectEvent(event.id)}>
                {event.name.text}
            </Link>
            {renderCategoryLogo(event)}
        </li>)
}

export default Result

