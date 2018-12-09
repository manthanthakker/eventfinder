import React, {Component} from 'react'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Login from "../component/login/login"
// import Profile from "../component/login/login";
import Register from "../component/register/register";
import Profile from "../component/profile/profile";
import Search from "../component/search/Search";

export default class StartPage extends Component {



    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid row">
                            <div className="col-md-12 col-lg-3 form-group">
                                <div className="navbar-header">
                                    <h1 className="navbar-header">
                                        EventFinder
                                    </h1>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3 form-group">
                                <div className="row float-right">
                                    <div className="col-6">
                                    <Link to="/register" className="btn btn-dark">Register
                                        {/*<i className="fa fa-table"></i>*/}
                                    </Link>
                                    </div>

                                    <div className="col-6">
                                    <Link to="/login" className="btn btn-dark">Login
                                        {/*<i className="fa fa-th-large"></i>*/}
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/register"
                           render={() => <Register/>}/>
                    <Route exact path="/login"
                           render={() => <Login/>}/>
                    <Route exact path="/profile"
                           render={() => <Profile/>}/>
                    <Route exact path="/"
                           render={() => <Search/>}/>


                </div>
            </Router>
        )
    }
}
