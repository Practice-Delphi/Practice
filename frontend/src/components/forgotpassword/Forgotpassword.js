import React, { Component } from 'react';
import './Forgotpassword.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';
import { sendResetLetter } from '../../actions/resetpasswordaction';
//Import components

class Forgotpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.submit = this.submit.bind(this);
    }
    changeEmail(event) {
        this.setState({ email: event.target.value });
    }
    submit() {
        this.props.send(this.state.email);
        // alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email}\n`);
    }
    renderError() {
        if (this.props.letterStatus.error) {
            return (
                <div className="Login-alert">
                    {this.props.lang.errors[this.props.letterStatus.error]}
                </div>
            );
        } else if (this.props.letterStatus.success) {
            return (
                <div className="Login-alert-success">
                    {this.props.lang.success.Success_Send_Reset}
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
                        {this.props.lang.forgotpass.title}
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder={this.props.lang.email} onChange={this.changeEmail} />
                       {this.renderError()}
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>{this.props.lang.forgotpass.send}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Forgotpassword.propTypes = {
    lang: PropTypes.object,
    letterStatus: PropTypes.object,
    send: PropTypes.func,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
    letterStatus: state.letterResetData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    send: (email) => { dispatch(sendResetLetter(email)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);