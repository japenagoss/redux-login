import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import LoginForm from './components/user/LoginForm';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={LoginForm} />
            <Route path="/login" component={LoginForm} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
