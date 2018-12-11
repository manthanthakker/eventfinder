import React, {Component} from 'react'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import Login from "../component/login/login"
// import Profile from "../component/login/login";
import Register from "../component/register/register";
import Search from "../component/search/Search";
import UserService from "../services/UserService";
import Profile from "../component/profile/profile"
import CreateEvent from "../component/create-event/CreateEvent";

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:15,
            usr:''
        };
    }

    checkUserCredentials = (user) => {
        debugger;
        UserService.login(user)
            .then(creds => this.setState({
                userId: creds.id,
                usr:creds
            }))
            .then(this.routeToProfile)
    };

    routeToProfile = () => {
        debugger;
        console.log('hello')
        console.log(this.state.userId)
        if (this.state.userId) {
            window.location.href = 'http://localhost:3000/profile'
        }
    };

    userLogout = () => {
        UserService.logout()
            .then(this.routeToLogin())
    };


    routeToRegister = () => {
        window.location.href = 'http://localhost:3000/register'
    };

    routeToCreateEvent = () => {
        debugger;
        window.location.href = 'http://localhost:3000/create/event'
    };

    registerUser = (user) => {
        debugger;
        UserService.register(user)
            .then(creds => this.setState({
                userId: creds.id
            }))
            .then(this.routeToProfile())
    };

    routeToLogin = () => {
        window.location.href = 'http://localhost:3000/login'
    };

    routeToSearchEvent = () => {
        window.location.href = 'http://localhost:3000/'
    };

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

                                    <div className="col-4">
                                        <Link to="/" className="btn btn-dark">Search
                                            {/*<i className="fa fa-table"></i>*/}
                                        </Link>
                                    </div>

                                    <div className="col-4">
                                    <Link to="/register" className="btn btn-dark">Register
                                        {/*<i className="fa fa-table"></i>*/}
                                    </Link>
                                    </div>

                                    <div className="col-4">
                                    <Link to="/login" className="btn btn-dark">Login
                                        {/*<i className="fa fa-th-large"></i>*/}
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/register"
                           render={() => <Register registerUser={this.registerUser}
                                                   routeToLogin={this.routeToLogin}/>}/>
                    <Route exact path="/login"
                           render={() => <Login checkUserCredentials={this.checkUserCredentials}
                                                routeToRegister={this.routeToRegister}/>}/>
                    <Route exact path="/profile"
                           render={() => <Profile routeToCreateEvent={this.routeToCreateEvent}
                                                  routeToSearchEvent = {this.routeToSearchEvent}/>}/>
                    <Route exact path="/"
                           render={() => <Search userLogout={this.userLogout}/>}/>

                    <Route exact path="/create/event"
                           render={() => <CreateEvent/>}/>

                </div>
            </Router>
        )
    }
}
