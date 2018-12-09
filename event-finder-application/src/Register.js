import React, {Component} from 'react'
import UserService from "../services/UserService";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            currentUser: {}
        }
    }

    inputFieldChange = (event) => {
        switch (event.target.id.toString()) {
            case "firstname":
                this.setState({
                    firstname: event.target.value
                });
                break;
            case "lastname":
                this.setState({
                    lastname: event.target.value
                });
                break;
            case "username":
                this.setState({
                    username: event.target.value
                })
                break;
            case "password":
                this.setState({
                    password: event.target.value
                })
                break;
        }
    };

    registerUser = () => {
        let user = {
            "username": this.state.username,
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "password": this.state.password,
        };
        UserService.register(user)
            .then(creds => this.setState({
                currentUser: creds
            }))
            .then(this.routeToProfile)
    };

    routeToLogin = () => {
        window.location.href = 'http://localhost:3000/login'
    };

    routeToProfile = () => {
        window.location.href = 'http://localhost:3000/profile'
    };

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h1>Register Here</h1>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="fname"
                               className="control-label">
                            First Name
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               onChange={this.inputFieldChange}
                               id="firstname"
                               placeholder="Your First Name"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="lastname"
                               className="control-label">
                            Last Name
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               id="lastname"
                               onChange={this.inputFieldChange}
                               placeholder="Your Last Name"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="username"
                               className="control-label">
                            Username
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text"
                               className="form-control"
                               id="username"
                               onChange={this.inputFieldChange}
                               placeholder="Your User Name"
                               required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="password"
                               className="control-label">
                            Password
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="password"
                               className="form-control"
                               id="password"
                               onChange={this.inputFieldChange}
                               placeholder="Your Password"
                               required/>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="col">
                        <button className="btn btn-primary"
                                onClick={() => this.registerUser()}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary"
                                onClick={() => this.routeToLogin()}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}