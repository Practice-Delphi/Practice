import React, { Component } from 'react';
import './Forgotpassword.css';

// connect component to redux
import { connect } from 'react-redux';

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
        alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email}\n`);
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    <div className="Login-title">
                        Forgot password
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder="Email address" onChange={this.changeEmail} />
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>Send</button>
                        </div>
                    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);