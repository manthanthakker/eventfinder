import React, {Component} from 'react'
import UserService from "../../services/UserService";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: {},
            user: '',
            first: '',
            last: ''
        };
        UserService.profile()
            .then(user => {
                console.log(user)
                this.setState({
                    loggedUser: user,
                    user: user.username,
                    first: user.firstName,
                    last: user.lastName
                })
            })
            .then(this.render())
    }

    // routeToCourses = () => {
    //     window.location.href = 'http://localhost:3000/courses'
    // };




    render() {
        // console.log(this.state)
        return (
            <div className="container align-self-center">
                <div className="form-group">
                    <h1>User Profile</h1>
                </div>

                <div className="form-group">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input type="text"
                           className="form-control"
                           id="username"
                           defaultValue={this.state.user}
                           readOnly/>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        First Name
                    </label>
                    <input type="text"
                           className="form-control"
                           defaultValue={this.state.first}
                           placeholder="Your First Name"
                           readOnly/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Last Name
                    </label>
                    <input type="text"
                           className="form-control"
                           defaultValue={this.state.last}
                           placeholder="Your Last Name"
                           readOnly/>
                </div>

                {/*<div className="form-group">*/}
                {/*<label htmlFor="role">*/}
                {/*Role*/}
                {/*</label>*/}
                {/*<select className="form-control"*/}
                {/*id="role">*/}
                {/*<option>Faculty</option>*/}
                {/*<option>Student</option>*/}
                {/*<option>Administrator</option>*/}
                {/*</select>*/}
                {/*</div>*/}

                <div className="form-group">
                    <label htmlFor="dob">
                        Date of Birth
                    </label>
                    <input type="date"
                           className="form-control"
                           id="dob"/>
                </div>

                {/*<div className="form-group">*/}
                {/*<button type="submit"*/}
                {/*className="btn btn-primary form-control"*/}
                {/*onClick={() => this.routeToCourses()}>*/}
                {/*Courses*/}
                {/*</button>*/}
                {/*</div>*/}

                <div className="form-group">
                    <button type="submit"
                            onClick={() => this.props.userLogout()}
                            className="btn btn-danger form-control">
                        Log Out
                    </button>
                </div>




                <div className="row float-right">
                    <div className="col">
                        <button className="btn btn-primary"
                                onClick={() => this.props.routeToCreateEvent()}>
                            Host an Event?
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}