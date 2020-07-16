import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment';



class Dashboard extends Component {

    constructor(props) {
        super(props);
        let token = localStorage.getItem('token');
        let issuedTime = localStorage.getItem('issued');
        let expires_in = localStorage.getItem('expires_in');
        let currendate = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
        debugger
        let timeDefference = moment.utc(moment(new Date('Sun, 12 Jul 2020 19:00:32 GMT'), "DD/MM/YYYY HH:mm:ss").diff(moment(new Date(), "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")


        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn
        }
    }

    render() {

        if (this.state.loggedIn == false) {
            return <Redirect to='/' />
        }

        return (
            <>
                <div>Welecome To Dashboard</div>
                <Link to='/logout' >Logout here</Link>
            </>
        )
    }

}


export default Dashboard;