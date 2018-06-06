import React, { Component } from 'react';
import './Register.css';

// connect component to redux
import { connect } from 'react-redux';


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
    }
    changeEmail(event) {
        this.setState({email:event.target.value});
    }
    changePassword(event) {
        this.setState({password:event.target.value});
    }
    changeConfirmPassword(event) {
        this.setState({confirmpass:event.target.value});
    }
    changeCheck1(event) {
        this.setState({check1:event.target.checked});
    }
    changeCheck2(event) {
        this.setState({check2:event.target.checked});
    }
    submit() {
        alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email} \n Password: ${this.state.password} \n ConfirmPassword: ${this.state.confirmpass} \n Check1: ${this.state.check1} \n Check2: ${this.state.check2}`);
    }
    render() {
        return (
            <div className="Register">
                <div className="Register-container">
                    <div className="Register-title">
                        Register
                </div>
                    <form className="Register-form">
                        <input type="email" className="Register-input" placeholder="Email address" onChange={this.changeEmail} />
                        <input type="password" className="Register-input" placeholder="Password" onChange={this.changePassword}/>
                        <input type="password" className="Register-input" placeholder="Confirm password" onChange={this.changeConfirmPassword}/>
                        <div className="Register-alert">
                            Some alert
                        </div>
                        <div className="Register-form-checkbox">
                            <div>
                                <input type="checkbox" name="citizenCertification" value="on" onChange={this.changeCheck1}/>
                                Check 1
                        </div>
                            <div>
                                <input type="checkbox" name="termConfirm" value="on" onChange={this.changeCheck2}/>
                                <span> I agree with <a href="/"> Check 2</a></span>
                            </div>
                        </div>
                        <div className="Register-form-submit">
                            <button type="button" onClick={this.submit}>Send</button>
                        </div>
                    </form>
                    <div className="Register-loginlink">
                        <a href="/account/login">Already have account</a>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);