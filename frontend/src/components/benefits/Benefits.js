import React, { Component } from 'react';
import './Benefits.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import wrong from './wrong.svg';
import correct from './correct.svg';

class Benefits extends Component {
    render() {
        return (
            <div class="Benefits">
                <div className="ben-form">
                    <div className="topic">
                        <h1><strong><span className="problems">{this.props.lang.benefits.topik1span}</span> 
                            {this.props.lang.benefits.topik1}
                        </strong></h1>
                    </div>
                    <div className="tegs">
                        <div className="line">
                            <div className="img">
                                <img className="" src={wrong} alt=""/>
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text1}
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img className="" src={wrong} alt="" />
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text2}
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img className="" src={wrong} alt="" />
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text3}
                            </div>
                        </div>
                    </div>
                    <div className="topic">
                        <h1><strong>{this.props.lang.benefits.topik2} <span className="squeezer">{this.props.lang.benefits.topik2span}</span></strong></h1>
                    </div>
                    <div className="tegs">
                        <div className="line">
                            <div className="img">
                                <img className="" src={correct} alt="" />
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text4}
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img className="" src={correct} alt="" />
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text5}
                            </div>
                        </div>
                        <div className="line">
                            <div className="img">
                                <img className="" src={correct} alt="" />
                            </div>
                            <div className="text">
                                {this.props.lang.benefits.text6}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Benefits.propTypes = {
    lang: PropTypes.object,
    open: PropTypes.func,
}


const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Benefits);