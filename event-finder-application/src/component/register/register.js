import React, {Component} from 'react'
import UserService from "../../services/UserService";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            about:'',
            role:'Host',
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
            case "about":
                this.setState({
                    about: event.target.value
                })
                break;
            case "role":
                this.setState({
                    role: event.target.value
                })
                break;

        }
    };


    routeToProfile = () => {
        window.location.href = 'http://localhost:3000/profile'
    };

    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <h3>Register Here</h3>
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

                    <div className="row form-group">
                        <div className="col">
                            <label htmlFor="role">Role</label>
                        </div>
                        <div className="col-10">
                            <select value={this.state.role} onChange={this.inputFieldChange} className="form-control"
                            id="role">
                            <option>Host</option>
                            <option>Registering User</option>
                            </select>
                        </div>
                    </div>

                <div className="row form-group">
                    <div className="col">
                        <label htmlFor="about"
                               className="control-label">
                            About me
                        </label>
                    </div>
                    <div className="col-10">
                        <input type="text-area"
                               className="form-control"
                               id="about"
                               onChange={this.inputFieldChange}
                               placeholder="Tell us a bit about yourself!"
                               required/>
                    </div>
                </div>



                <div className="row justify-content-between">
                    <div className="col">
                        <button className="btn btn-primary"
                                onClick={() => this.props.registerUser(
                                    {
                                        "username": this.state.username,
                                        "firstName": this.state.firstname,
                                        "aboutMe":this.state.about,
                                        "lastName": this.state.lastname,
                                        "password": this.state.password,
                                        "userType":this.state.role
                                    }
                                )}>
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary"
                                onClick={() => this.props.routeToLogin()}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}