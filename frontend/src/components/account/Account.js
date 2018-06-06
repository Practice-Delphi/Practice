import React, { Component } from 'react';
import './Account.css';

// connect component to redux
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';
import logo from '../logo.jpg';

//Import components
import Register from '../register/Register';
import Login from '../login/Login';
import Langselect from '../langselect/Langselect';
import Profile from '../profile/Profile';
import Forgotpassword from '../forgotpassword/Forgotpassword';


class Account extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="Account">
        <header className="Account-header">
          <div className="Account-navbar">
            <div className="Account-brand">
              <img src={logo} className="Account-logo" alt="logo" />
              <h1 className="Account-title">Site Title</h1>
            </div>
            <div className="Account-button-container">
              <Langselect />
              <div className="Account-button-link">
                Token Sale
              </div>
            </div>
          </div>
        </header>
        <Route exact={true} path={"/account"} component={Profile} />
        <Route exact={true} path={"/account/register"} component={Register} />
        <Route exact={true} path={"/account/login"} component={Login} />
        <Route exact={true} path={"/account/forgot_password"} component={Forgotpassword} />
        <footer className="Account-footer">
          <div className="Account-footer-container">
            <div className="Account-footer-copyright">
              @ 2018 GGC
            </div>
            <div className="Account-footer-link-container">
              <a href="/" className="Account-footer-link">White book</a>
              <a href="/" className="Account-footer-link">Token rules</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // some props
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);