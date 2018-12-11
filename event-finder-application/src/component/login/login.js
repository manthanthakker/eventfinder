import React, {Component} from 'react'
import UserService from "../../services/UserService";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    updateUsername = event =>
        this.setState({
            username: event.target.value
        });

    updatePassword = event =>
        this.setState({
            password: event.target.value
        });


    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-group">
                        <h3>Log In</h3>
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
                    <div className="row form-group float-right">
                        <div className="col">
                            <button className="btn btn-primary form-group"
                                    onClick={() => this.props.checkUserCredentials(
                                        {
                                            "username": this.state.username,
                                            "password": this.state.password
                                        }
                                    )}>
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};