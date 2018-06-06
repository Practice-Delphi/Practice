import React, { Component } from 'react';
import './Clock.css';

// connect component to redux
import { connect } from 'react-redux';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetDate: new Date(2018, 5, 8, 12, 0, 0),
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
                        Clock
                    </div>
                    <div className="Clock-container">
                        <div className="Clock-time">
                            {date.getDay()}д
                    </div>
                        <div className="Clock-time">
                            {date.getHours()}ч
                    </div>
                        <div className="Clock-time">
                            {date.getMinutes()}м
                    </div>
                        <div className="Clock-time">
                            {date.getSeconds()}с
                    </div>
                    </div>
                    <a href="/account/register" className="btn btn-primary Clock-button">Registration</a>
                </div>
                <div className="Clock-price">
                    <div>
                        <b>Price:</b> $0.20 = 1 GGC
                    </div>
                    <div>
                        <b>Minimal purchase:</b> 500 GGC
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

export default connect(mapStateToProps, mapDispatchToProps)(Clock);