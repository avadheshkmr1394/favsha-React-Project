import React, { Component } from 'react'
import App from './App'
import AuthService from './Service/LoginService'
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import Error from './Error'



class LoginPage extends Component {

    constructor() {
        super();
        let LoggedIn = false;
        let token = localStorage.getItem('token');
        if (token !== null) {
            LoggedIn = true;
        }
        let InvalidUser = ''
        this.state = {
            UserName: '',
            Password: '',
            Loading: true,
            Message: '',
            isError: false,
            InvalidUser: '',
            LoggedIn
        }

    }



    handleSubmit = (event) => {
        event.preventDefault();
        debugger
        if (this.state.Password && this.state.UserName) {
            AuthService.GetToken(this.state.UserName, this.state.Password).then((res) => {
                debugger
                this.setState({
                    LoggedIn: true
                })
            },
                error => {
                    let InvalidUser;
                    if (error.response.status == 400) {
                        InvalidUser = error.response.data.error_description
                    }
                    this.setState({
                        InvalidUser: InvalidUser
                    })
                }
            );
        }
        else {
            this.setState({
                Loading: false
            })

        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            InvalidUser: ''
        })
    }


    render() {

        if (this.state.LoggedIn == true) {
            return <Redirect to='/Dashboard' />
        }

        return (
            <>
                <div className="container">
                    <section id="content">
                        <form action="" onSubmit={(event) => { this.handleSubmit(event) }}   >
                            <h1>Login Credential</h1>
                            <div>
                                <input type="text" onChange={this.handleChange} name='UserName' value={this.state.UserName} placeholder="Username" required="" id="username" />
                            </div>
                            <div>
                                <input type="password" onChange={this.handleChange} name='Password' value={this.state.Password} placeholder="Password" required="" id="password" />
                                <label><span style={{ color: 'red' }}>{this.state.InvalidUser}</span></label>
                            </div>
                            <div>
                                <input type="submit" value="Log in" />
                                <a href="#">Forgot your password?</a>
                                <a href="#">Register</a>
                            </div>
                        </form>
                    </section>
                </div>
            </>
        );
    }

}

export default LoginPage



