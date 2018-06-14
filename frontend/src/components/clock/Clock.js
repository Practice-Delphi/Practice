import React, { Component } from 'react';
import './Clock.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

// import assets
import etheriumicon from '../../assets/etheriumicon.png';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';

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
                    <div className="Clock-contact">
                        {this.props.lang.clock.contact}  <a href="https://tokensale.squeezer.io/mailto:info@squeezer.io">{this.props.lang.clock.contacturl}</a>
                    </div>
                    <div className="Clock-img-container">
                        <img src={etheriumicon} />
                        <img src={visa} />
                        <img src={mastercard} />
                    </div>
                </div>

                <div className="Clock-price">
                    <div>
                        <b>{this.props.lang.clock.price}:</b> $0.20 = 1 SQR
                    </div>
                    <div>
                        <b>{this.props.lang.clock.min}:</b> 500 SQR
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