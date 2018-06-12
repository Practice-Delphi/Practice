import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import { login, logout } from '../../actions/loginaction';

// import { withRouter } from 'react-router-dom';

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
        // this.props.deleteData();
        this.renderError = this.renderError.bind(this);
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
            // this.props.history.goForward();
            // console.log(this.props.history);
        }
    }
    renderError() {
        if (this.props.userData.error) {
            return (
                <div className="Login-alert">
                    {this.props.userData.error}
                </div>
            )
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    <div className="Login-title">
                        {this.props.lang.login.title}
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder={this.props.lang.email} onChange={this.changeEmail} />
                        <input type="password" className="Login-input" placeholder={this.props.lang.password} onChange={this.changePassword} />
                        { this.renderError() }
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>{this.props.lang.login.title}</button>
                        </div>
                    </form>
                    <div className="Login-links">
                        <a href="/account/register">{this.props.lang.login.notmember}</a>
                        <a href="/account/forgot_password">{this.props.lang.login.forgotpass}</a>
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
    lang: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    userData: state.userData,
    tokenData: state.tokenData,
    history: state.historyData,
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    login: (email, password) => { dispatch(login(email, password)) },
    deleteData: () => { dispatch(logout())}
});



export default connect(mapStateToProps, mapDispatchToProps)(Login);