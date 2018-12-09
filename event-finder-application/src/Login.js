import React, {Component} from 'react'
import UserService from "../services/UserService";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            currentUser: {}
        }
    }

    updateUsername = event =>
        this.setState({
            user: event.target.value
        });

    updatePassword = event =>
        this.setState({
            password: event.target.value
        });

    checkUserCredentials = () => {
        let user = {
            "username": this.state.user,
            "password": this.state.password
        };
        UserService.login(user)
            .then(creds => this.setState({
                currentUser: creds
            }))
            .then(this.routeToProfile)
    };

    routeToProfile = () => {
        console.log(this.state.currentUser.id)
        if (this.state.currentUser.id) {
            window.location.href = 'http://localhost:3000/profile'
        }
    };

    routeToRegister = () => {
        window.location.href = 'http://localhost:3000/register'
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <h1>Log In</h1>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username"
                               className="control-label">
                            Username
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-user"/>
                                </div>
                            </div>
                            <input className="form-control"
                                   onChange={this.updateUsername}
                                   type="text"
                                   id="username"
                                   placeholder="jdoe123"
                                   required/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"
                               className="control-label">
                            Password
                        </label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-key"/>
                                </div>
                            </div>
                            <input className="form-control"
                                   onChange={this.updatePassword}
                                   type="password"
                                   id="password"
                                   placeholder="*****"
                                   required/>
                        </div>
                    </div>
                    <div className="row form-group justify-content-between">
                        <div className="col">
                            <button className="btn btn-primary form-group"
                                    onClick={() => this.checkUserCredentials()}>
                                Log In
                            </button>
                        </div>

                        <div>
                            <button className="btn btn-link form-group" onClick={() => this.routeToRegister()}>
                                <u>
                                    Sign up.
                                </u>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};