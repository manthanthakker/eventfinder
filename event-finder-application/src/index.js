import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
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
    faClock,
    faMapMarker
} from '@fortawesome/free-solid-svg-icons';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import StartPage from "./containers/StartPage";



library.add(faEnvelope, faKey, faSpinner, faSearch, faSnowflake, faUtensils, faMusic, faPaintBrush, faFilm,
    faCalendar, faClock,
    faMapMarker);

ReactDOM.render(
    <div className="container-fluid">
        {/*<Search/>*/}
        <StartPage/>

    </div>,
    document.getElementById("root")
)