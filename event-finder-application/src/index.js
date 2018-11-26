import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Search from "./component/search/Search";


ReactDOM.render(
    <div className="container-fluid">
        <Search/>
    </div>,
    document.getElementById("root")
)