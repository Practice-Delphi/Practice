import React, { Component } from 'react';
import './Register.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';
import { register } from '../../actions/loginaction';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmpass: "",
            errorType: null,
            check1: false,
            check2: false,
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.changeCheck1 = this.changeCheck1.bind(this);
        this.changeCheck2 = this.changeCheck2.bind(this);
        this.submit = this.submit.bind(this);
        this.renderError = this.renderError.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
    }
    changeEmail(event) {
        this.setState({ email: event.target.value });
    }
    changePassword(event) {
        this.setState({ password: event.target.value });
    }
    changeConfirmPassword(event) {
        this.setState({ confirmpass: event.target.value });
    }
    changeCheck1(event) {
        this.setState({ check1: event.target.checked });
    }
    changeCheck2(event) {
        this.setState({ check2: event.target.checked });
    }
    submit() {
        if (this.props.userData.loading) {
            this.props.register(this.state.email, this.state.password);
        }
        // alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email} \n Password: ${this.state.password} \n ConfirmPassword: ${this.state.confirmpass} \n Check1: ${this.state.check1} \n Check2: ${this.state.check2}`);
    }
    checkErrors() {
        if (this.state.password !== this.state.confirmpass) {
            this.setState({ errorType: "Password not confirmed" });
        } else if (!this.state.check1) {
            this.setState({ errorType: "Please check Check1" });
        } else if (!this.state.check2) {
            this.setState({ errorType: "Please check Check2" });
        } else if (this.props.userData.error) {
            this.setState({ errorType: this.props.userData.error });
        } else {
            this.setState({ errorType: null });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.errorType !== prevState.errorType || this.props.userData !== prevProps.userData) {
            this.checkErrors();
        } else if(this.props.userData.user) {
            this.props.history.push('/account');
        }
    }
    renderError() {
        if (this.state.errorType) {
            return (
                <div className="Register-alert">
                    {this.state.errorType}
                </div>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className="Register">
                <div className="Register-container">
                    <div className="Register-title">
                        {this.props.lang.register.title}
                    </div>
                    <form className="Register-form">
                        <input type="email" className="Register-input" placeholder={this.props.lang.email} onChange={this.changeEmail} />
                        <input type="password" className="Register-input" placeholder={this.props.lang.password} onChange={this.changePassword} />
                        <input type="password" className="Register-input" placeholder={this.props.lang.confirmpass} onChange={this.changeConfirmPassword} />
                        {this.renderError()}
                        <div className="Register-form-checkbox">
                            <div>
                                <input type="checkbox" name="citizenCertification" value="on" onChange={this.changeCheck1} />
                                {this.props.lang.register.check1}
                        </div>
                            <div>
                                <input type="checkbox" name="termConfirm" value="on" onChange={this.changeCheck2} />
                                <span> {this.props.lang.register.check2} <a href="/"> {this.props.lang.account.terms}</a></span>
                            </div>
                        </div>
                        <div className="Register-form-submit">
                            <button type="button" onClick={this.submit}>{this.props.lang.register.send}</button>
                        </div>
                    </form>
                    <div className="Register-loginlink">
                        <a href="/account/login">{this.props.lang.register.gotologin}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    userData: PropTypes.object,
    history: PropTypes.object,
    register: PropTypes.func,
    lang: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    userData: state.userData,
    history: state.historyData,
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    register: (email, password) => { dispatch(register(email, password)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);