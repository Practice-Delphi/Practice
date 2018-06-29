import React, { Component } from 'react';
import './Verifyemail.css';
import PropTypes from 'prop-types';
import qs from 'query-string';

// connect component to redux
import { connect } from 'react-redux';
import { verifyEmail } from '../../actions/verifyemailaction';
//Import components

class Verifyemail extends Component {
    componentDidMount() {
        const id = qs.parse(this.props.location.search).id;
        if (id) {
            this.props.send(id);
        } else {
            this.props.history.replace('/account');
        }
    }
    renderMessage() {
        if (this.props.verify.email) {
            return (
                <div className="Verifyemail-message">
                    {this.props.lang.success.Success_Verify1} {this.props.verify.email} {this.props.lang.success.Success_Verify2}.
                </div>
            );
        } else {
            return (
                <div className="Verifyemail-message">
                    {this.props.lang.errors[this.props.verify.error]}.
                    <div className="Login-form-submit">
                        <button onClick={this.componentDidMount}>{this.props.lang.send}</button>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    {this.renderMessage()}
                </div>
            </div>
        );
    }
}

Verifyemail.propTypes = {
    lang: PropTypes.object,
    verify: PropTypes.object,
    send: PropTypes.func,
    location: PropTypes.object,
    history: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
    verify: state.verifyData,
    history: state.historyData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    send: (id) => { dispatch(verifyEmail(id)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Verifyemail);