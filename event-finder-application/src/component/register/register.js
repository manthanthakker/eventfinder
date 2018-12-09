import React, {Component} from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:''
        };
    }

    updateUsername = event =>
        this.setState({
            username: event.target.value
        })


    updatePassword = event =>
        this.setState({
            password: event.target.value
        })

    render() {
        return (
            <div class="container">
                <h1>Sign Up</h1>
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
                            <input  onChange={this.updatePassword} type="password" class="form-control wbdv-password-fld"
                                    id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control wbdv-password-fld"
                                   id="vpassword" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            <div onClick={() => this.props.register({
                                username: this.state.username,
                                password:this.state.password
                            })}class="btn btn-primary btn-block">Sign up</div>
                            <div class="row">
                                <div class="col-6">
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