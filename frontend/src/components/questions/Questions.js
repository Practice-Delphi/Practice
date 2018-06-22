import React, { Component } from 'react';
import './Questions.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import twiter from '../../assets/twiter.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import bitcoin from '../../assets/bitcoin.svg';
import medium from '../../assets/medium.svg';
import telegram from '../../assets/telegram.svg';


class Questions extends Component {

    render() {
        return (
            <div className="Questions">
                <div className="form Questions-form" >
                    <div className="FAQ">
                        <h1><strong>{this.props.lang.questions.head}</strong></h1>
                        <div className="FAQ1" onClick={() => {
                            (document.getElementById("answer1").hidden === true) ?
                                document.getElementById("answer1").hidden = false : document.getElementById("answer1").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>{this.props.lang.questions.FAQ1}</strong></h4>
                            </div>
                        </div>
                        <div id="answer1" hidden="true">
                            {this.props.lang.questions.FAQanswer1}
                        </div>
                        <div className="FAQ2" onClick={() => {
                            (document.getElementById("answer2").hidden === true) ?
                                document.getElementById("answer2").hidden = false : document.getElementById("answer2").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>{this.props.lang.questions.FAQ2}</strong></h4>
                            </div>
                        </div>
                        <div id="answer2" hidden="true">
                             {this.props.lang.questions.FAQanswer2}
                        </div>

                        <div className="FAQ3" onClick={() => {
                            (document.getElementById("answer3").hidden === true) ?
                                document.getElementById("answer3").hidden = false : document.getElementById("answer3").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>{this.props.lang.questions.FAQ3}</strong></h4>
                            </div>
                        </div>
                        <div id="answer3" hidden="true">
                            {this.props.lang.questions.FAQanswer3}
                        </div>
                        <div className="FAQ4" onClick={() => {
                            (document.getElementById("answer4").hidden === true) ?
                                document.getElementById("answer4").hidden = false : document.getElementById("answer4").hidden = true
                        }}>
                            <div className='FAQ-link'>
                                <h4><strong>{this.props.lang.questions.FAQ4}</strong></h4>
                            </div>
                        </div>
                        <div id="answer4" hidden="true">
                            {this.props.lang.questions.FAQanswer4}
                        </div>
                    </div>
                    <div className="Links">
                        <h4>    {this.props.lang.questions.link}
                            <a href="https://tokensale.squeezer.io/mailto:info@squeezer.io">info@squeezer.io </a>
                        </h4>
                        <div className="Links-img">
                            <a href="https://twitter.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="@squeezerio"><img src={twiter} alt="Twiter" /></a>
                            <a href="https://www.facebook.com/Squeezer.IO" target="_blank" rel='noopener noreferrer' title="Facebook"><img src={facebook} alt="Facebook" /></a>
                            <a href="https://github.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="GitHub"><img src={github} alt="GitHub" /></a>
                            <a href="https://bitcointalk.org/index.php?topic=3169422" rel='noopener noreferrer' target="_blank" title="BitCoin Talk"><img src={bitcoin} alt="BitCoin Talk" /></a>
                            <a href="https://medium.com/@squeezer" target="_blank" rel='noopener noreferrer' title="Medium"><img src={medium} alt="Medium" /></a>
                            <a href="https://telegram.me/squeezerio" target="_blank" rel='noopener noreferrer' title="Telegram"><img src={telegram} alt="Telegram" /><span>22k+</span></a>
                        </div>
                        {/* <div className="img">
                            <a href="https://www.facebook.com/Squeezer.IO" target="_blank" rel='noopener noreferrer' title="Facebook"><img src={facebook} alt="Facebook" /></a>
                        </div>
                        <div className="img">
                            <a href="https://github.com/SqueezerIO" target="_blank" rel='noopener noreferrer' title="GitHub"><img src={github} alt="GitHub" /></a>
                        </div>
                        <div className="img">
                            <a href="https://bitcointalk.org/index.php?topic=3169422" rel='noopener noreferrer' target="_blank" title="BitCoin Talk"><img src={bitcoin} alt="BitCoin Talk" /></a>
                        </div>
                        <div className="img">
                            <a href="https://medium.com/@squeezer" target="_blank" rel='noopener noreferrer' title="Medium"><img src={medium} alt="Medium" /></a>
                        </div>
                        <div className="img">
                            <a href="https://telegram.me/squeezerio" target="_blank" rel='noopener noreferrer' title="Telegram"><img src={telegram} alt="Telegram" /><span>22k+</span></a>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
Questions.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Questions);


