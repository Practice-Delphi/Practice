import React, { Component } from 'react';
import './Video.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import { closeVideo } from '../../actions/videoaction';

//Import components

class Video extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.status.display) {
            return (
                <div className="Video" onClick={this.props.close}>
                    <div className="Video-inner">
                        <div className="Video-main">
                            <div className="Video-container">
                                <button className="Video-exit" onClick={this.props.close}></button>
                                <iframe className="Video-frame" src={`${this.props.status.url}?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark"`}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

Video.propTypes = {
    status: PropTypes.object,
    close: PropTypes.func,
}

const mapStateToProps = state => ({
    // some props
    status: state.videoStatus,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    close: () => { dispatch(closeVideo()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);