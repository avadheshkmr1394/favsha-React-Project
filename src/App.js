import React, { Component } from 'react';
import './App.css';
import Dashboard from './Pages/Dashboard'
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Error from './Error'


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Login} />
          <Route path={'/dashboard'} component={Dashboard} />
          <Route path={'/logout'} component={Logout} />
          <Route path={'/error'} component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
