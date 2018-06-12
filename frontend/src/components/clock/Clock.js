import React, { Component } from 'react';
import './Clock.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetDate: new Date(2018, 6, 30, 12, 0, 0),
            currentDate: new Date()
        }
        let timer = null;
        let tick = () => {
            this.setState({ currentDate: new Date() });
            timer = setTimeout(tick, 1000);
        }
        timer = setTimeout(tick, 1000);
    }

    render() {
        const date = new Date(this.state.targetDate.getTime() - this.state.currentDate.getTime());
        // console.log(date);
        return (
            <div className="Clock">
                <div className="Clock-primary">
                    <div className="Clock-title">
                        {this.props.lang.clock.title}:
                    </div>
                    <div className="Clock-container">
                        <div className="Clock-time">
                            {date.getDay()}{this.props.lang.clock.d}
                    </div>
                        <div className="Clock-time">
                            {date.getHours()}{this.props.lang.clock.h}
                    </div>
                        <div className="Clock-time">
                            {date.getMinutes()}{this.props.lang.clock.m}
                    </div>
                        <div className="Clock-time">
                            {date.getSeconds()}{this.props.lang.clock.s}
                    </div>
                    </div>
                    <a href="/account/register" className="Clock-button">{this.props.lang.clock.register}</a>
                </div>
                <div className="Clock-price">
                    <div>
                        <b>{this.props.lang.clock.price}:</b> $0.20 = 1 GGC
                    </div>
                    <div>
                        <b>{this.props.lang.clock.min}:</b> 500 GGC
                    </div>
                </div>
            </div>
        );
    }
}

Clock.propTypes = {
    lang: PropTypes.object,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,

});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);