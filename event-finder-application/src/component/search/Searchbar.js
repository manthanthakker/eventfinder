import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Spinner from "../spinner/Spinner";
import ResultList from "../results/ResultList";
import '../util.css'


const Searchbar = ({updateForm, getQueryData, spinner, events, selectEvent}) =>
    <div name="search-bar"
         className="form-inline">
        <div className="col-10">
            <input name="search-events"
                   placeholder="Search a city"
                   onChange={updateForm}
                   className="form-control search-input"/>
        </div>
        <div className="col-2">
            <FontAwesomeIcon icon="search" size="2x" name="search-query"
                             onClick={() => getQueryData()}/>
        </div>
        <div className="col-12">
            <Spinner hidden={spinner}/>
            <ResultList
                events={events}
                selectEvent={selectEvent}/>
        </div>

    </div>

export default Searchbar

