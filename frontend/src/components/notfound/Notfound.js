import React, { Component } from 'react';
import './Notfound.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

// import assets


class Notfound extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        }
    }

    render() {
        return (
           <div className="Notfound">
                <div className="Notfound-container">
                    <div className="Notfound-content">
                        <div className="Notfound-title">404</div>
                        <div className="Notfound-text">Not found</div>
                    </div>
                </div>
           </div>
        );
    }
}

Notfound.propTypes = {
    lang: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Notfound);