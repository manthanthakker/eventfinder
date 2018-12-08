import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Search from "./component/search/Search";
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faKey,
    faSpinner,
    faSearch,
    faSnowflake,
    faUtensils,
    faMusic,
    faPaintBrush,
    faFilm,
    faCalendar,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import '../node_modules/font-awesome/css/font-awesome.min.css';


library.add(faEnvelope, faKey, faSpinner, faSearch, faSnowflake, faUtensils, faMusic, faPaintBrush, faFilm, faCalendar, faClock);

ReactDOM.render(
    <div className="container-fluid">

        <Search/>
    </div>,
    document.getElementById("root")
)