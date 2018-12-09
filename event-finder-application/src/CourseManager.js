import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CourseList from "./CourseList";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";

export default class CourseManager extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/register"
                           render={() => <Register/>}/>
                    <Route exact path="/courses"
                           render={() => <CourseList/>}/>
                    <Route exact path="/login"
                           render={() => <Login/>}/>
                    <Route exact path="/profile"
                           render={() => <Profile/>}/>
                </div>
            </Router>
        )
    }
}