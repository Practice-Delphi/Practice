import React, { Component } from 'react';
import './Nigga.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

// import assets

const url = "http://topspiski.com/wp-content/uploads/2017/08/x538-700x465.jpg";

class Nigga extends Component {
    render() {
        return (
           <div className="Nigga">
                <div className="Nigga-container">
                    <div className="Nigga-content">
                        <div className="Nigga-title Nigga-text">404</div>
                        <div className="Nigga-title Nigga-text"><p>Ты зашел не в тот район</p> <p>белоснежка</p></div>
                    </div>
                </div>
           </div>
        );
    }
}

Nigga.propTypes = {
    lang: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Nigga);