import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class Logout extends Component {
    constructor() {
        super();
        let logout = false;
        let token = localStorage.getItem('token');
        if (token == null) {
            debugger
            logout = true;
        }
        this.state = {
            logout
        }
        localStorage.clear();
        sessionStorage.clear();

    }

    render() {
        debugger
        if (this.state.logout == true) {
            return <Redirect to='/' />
        }
        return (
            <>
                <h1>You have been Logout ?</h1>
                <Link to='/'>Login Again</Link>
            </>
        )
    }
}

export default Logout;