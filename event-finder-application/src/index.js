import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Search from "./component/search/Search";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEnvelope, faKey, faSpinner, faSearch, faSnowflake} from '@fortawesome/free-solid-svg-icons';
import Login from "./component/login/login";

library.add(faEnvelope, faKey, faSpinner, faSearch, faSnowflake);

ReactDOM.render(
    <div className="container-fluid">
        {/*<Search/>*/}
        <Login/>



    </div>,
    document.getElementById("root")
)