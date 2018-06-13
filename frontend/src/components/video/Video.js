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
                                <iframe className="Video-frame" src={this.props.status.url}></iframe>
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