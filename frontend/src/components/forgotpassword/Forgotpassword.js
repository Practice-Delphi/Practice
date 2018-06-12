import React, { Component } from 'react';
import './Forgotpassword.css';
import PropTypes from 'prop-types';

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
                        {this.props.lang.forgotpass.title}
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder={this.props.lang.email} onChange={this.changeEmail} />
                        <div className="Login-alert">
                            alert
                        </div>
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
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,

});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword);