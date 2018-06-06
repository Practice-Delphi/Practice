import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import { login, runDelete } from '../../actions/loginaction';

import { withRouter } from 'react-router-dom';

//Import components

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorType: null,
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);
        this.props.deleteData();
    }
    changeEmail(event) {
        this.setState({ email: event.target.value });
    }
    changePassword(event) {
        this.setState({ password: event.target.value });
    }
    submit() {
        this.props.login(this.state.email, this.state.password);
        // alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email} \n Password: ${this.state.password}`);
    }
    componentDidUpdate() {

        if (this.props.userData.user) {
            this.props.history.push("/account");
            this.props.history.goForward();
            console.log(this.props.history);
        }
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    <div className="Login-title">
                        Log in
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder="Email address" onChange={this.changeEmail} />
                        <input type="password" className="Login-input" placeholder="Password" onChange={this.changePassword} />
                        <div className="Login-alert">
                            Some alert
                    </div>
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>Send</button>
                        </div>
                    </form>
                    <div className="Login-links">
                        <a href="/account/register">New account</a>
                        <a href="/account/forgot_password">Forgot password</a>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    history: PropTypes.object,
    userData: PropTypes.object,
    deleteData: PropTypes.func,
}

const mapStateToProps = state => ({
    // some props
    userData: state.userData,
    tokenData: state.tokenData,
    history: state.historyData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    login: (email, password) => { dispatch(login(email, password)) },
    deleteData: () => { dispatch(runDelete())}
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);