import React, { Component } from 'react';
import './Resetpassword.css';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { Link } from 'react-router-dom';
// connect component to redux
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/resetpasswordaction';
//Import components

class Resetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            confpass: null,
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeConfPass = this.changeConfPass.bind(this);
        this.submit = this.submit.bind(this);
    }
    changePassword(event) {
        this.setState({ password: event.target.value });
    }
    changeConfPass(event) {
        this.setState({ confpass: event.target.value });
    }
    submit() {
        if (!this.props.reset.loading) {
            this.props.send(this.state.email, this.state.password, this.state.confpass);
        }
    }
    componentDidMount() {
        if (!this.state.email) {
            const email = qs.parse(this.props.location.search).email;
            if (email) {
                this.setState({ email });
            } else {
                this.props.history.replace('/account');
            }
        }
    }
    renderError() {
        if (this.props.reset.error) {
            return (
                <div className="Login-alert">
                    {this.props.lang.errors[this.props.reset.error]}
                </div>
            );
        } else if (this.props.reset.success) {
            return (
                <div className="Login-alert-success">
                    {this.props.lang.success[this.props.reset.success]} <Link to={"/account/login"} className="Login-link">{this.props.lang.success.Success_Reset_Login}</Link>
                </div>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    <div className="Login-title">
                        {this.props.lang.forgotpass.newpass}
                    </div>
                    <form className="Login-form">
                        <input type="password" className="Login-input" placeholder={this.props.lang.password} onChange={this.changePassword} />
                        <input type="password" className="Login-input" placeholder={this.props.lang.confirmpass} onChange={this.changeConfPass} />
                        {this.renderError()}
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>{this.props.lang.send}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Resetpassword.propTypes = {
    lang: PropTypes.object,
    reset: PropTypes.object,
    send: PropTypes.func,
    location: PropTypes.object,
    history: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
    reset: state.resetData,
    history: state.historyData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    send: (email, password, confpass) => { dispatch(resetPassword(email, password, confpass)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Resetpassword);