import React, {Component} from 'react';
import UserService from "../../services/UserService";
import Register from "../register/register";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            userId:15
        };
    }


    login = (user) => {
        debugger;
        UserService.login(user)
            .then(usr => {
                if (usr!=null) {
                    console.log(usr.id);
                    this.setState({userId: usr.id})
                    alert("You have successfully logged in! Click on WhiteBoard to get profile page and course pages")
                }
                else {
                    alert("Invalid!")
                }
            })
    }

    register = (user) => {
        debugger;
        console.log(user);
        UserService.register(user)
            .then(usr => {
                if (usr != null) {
                    this.setState({userId: usr.id})
                    alert("Successfully registered user! Click on Login and login with username and password entered here!")
                }
                else {
                    alert("Invalid!");
                }

            })
    }




    updateUsername = event =>
        this.setState({
            username: event.target.value
        })


    updatePassword = event =>
        this.setState({
            password: event.target.value
        })

    render()
    {
        return (
            <div class="container">
                <h1>Welcome to Eventfinder!</h1>
                <form>
                    <div class="form-group row">
                        <label for="username" class="col-sm-2 col-form-label">
                            Username </label>
                        <div class="col-sm-10">
                            <input onChange={this.updateUsername} class="form-control" id="username" placeholder="Alice"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Password </label>
                        <div class="col-sm-10">
                            <input onChange={this.updatePassword} type="password" class="form-control wbdv-password-fld"
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            <div onClick={() => this.login({
                                username: this.state.username,
                                password:this.state.password
                            })
                            } class="btn btn-primary btn-block">Sign in</div>
                            <div class = "row"></div>
                            <div class="row">
                                <div class="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div class="col-6">
                                    <Router>
                                        <div class="float-right">
                                            <Link to="/register">Register</Link>
                                            <Route path="/register"
                                                   render={() =>
                                                       <Register register={this.register}/>
                                                   }/>

                                        </div>
                                    </Router>
                                </div>
                                <div class="col-6">
                                    <a href="../index.html" class="float-right">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}