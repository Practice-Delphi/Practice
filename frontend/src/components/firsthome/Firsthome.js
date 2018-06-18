import React, { Component } from 'react';
import './Firsthome.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import { openVideo } from '../../actions/videoaction';

// import componets
import Clock from '../clock/Clock';

// import assets
import status1 from '../../assets/status1.png';
import status2 from '../../assets/status2.png';
import status3 from '../../assets/status3.png';
import status4 from '../../assets/status4.png';
import twiter from '../../assets/twiter.svg';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.svg';
import bitcoin from '../../assets/bitcoin.svg';
import medium from '../../assets/medium.svg';
import telegram from '../../assets/telegram.svg';
import videologo1 from '../../assets/videologo1.png';
import videologo2 from '../../assets/videologo2.png';

class Firsthome extends Component {
    render() {
        return (
            <div className="Firsthome">
                <div className="Firsthome-leftbar">
                    <div className="Firsthome-clock">
                        <Clock />
                    </div>
                    <div className="Firsthome-status-container">
                        <div className="Firsthome-status">
                            <div className="Firsthome-status-img">
                                <img src={status1} alt="" />
                            </div>
                            <div className="Firsthome-status-title">
                                {this.props.lang.firsthome.status1}
                            </div>
                        </div>
                        <div className="Firsthome-status">
                            <div className="Firsthome-status-img">
                                <img src={status2} alt="" />
                            </div>
                            <div className="Firsthome-status-title">
                                {this.props.lang.firsthome.status2}
                            </div>
                        </div>
                        <div className="Firsthome-status">
                            <div className="Firsthome-status-img">
                                <img src={status3} alt="" />
                            </div>
                            <div className="Firsthome-status-title">
                                {this.props.lang.firsthome.status3}
                            </div>
                        </div>
                        <div className="Firsthome-status">
                            <div className="Firsthome-status-img">
                                <img src={status4} alt="" />
                            </div>
                            <div className="Firsthome-status-title">
                                {this.props.lang.firsthome.status4}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Firsthome-rightbar">
                    <div className="Firsthome-rightbartitle">
                        <h1>{this.props.lang.firsthome.title1}</h1>
                        <h2>{this.props.lang.firsthome.title2}</h2>
                    </div>
                    <div className="Firtshome-links">
                        <a href="https://twitter.com/SqueezerIO" target="_blank" title="@squeezerio"><img src={twiter} alt="Twiter" /></a>
                        <a href="https://www.facebook.com/Squeezer.IO" target="_blank" title="Facebook"><img src={facebook} alt="Facebook" /></a>
                        <a href="https://github.com/SqueezerIO" target="_blank" title="GitHub"><img src={github} alt="GitHub" /></a>
                        <a href="https://bitcointalk.org/index.php?topic=3169422" target="_blank" title="BitCoin Talk"><img src={bitcoin} alt="BitCoin Talk" /></a>
                        <a href="https://medium.com/@squeezer" target="_blank" title="Medium"><img src={medium} alt="Medium" /></a>
                        <a href="https://telegram.me/squeezerio" target="_blank" title="Telegram"><img src={telegram} alt="Telegram" /><span>22k+</span></a>
                    </div>
                    <div className="Firtshome-videos">
                        <div onClick={() => { this.props.open("https://www.youtube.com/embed/VPbS_lyrF9Q") }}>
                            <img src={videologo1} alt="" />
                        </div>
                        <div onClick={() => { this.props.open("https://www.youtube.com/embed/egtTeDTV-FM") }}>
                            <img src={videologo2} alt="" />
                        </div>
                    </div>
                    <div className="Firsthome-documents">
                        <div>

                            <a href="https://tokensale.squeezer.io/docs/white-paper-final.pdf" target="_blank" className="Firsthome-documents-button">
                                <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/doc-512.png" alt="" />
                                <div>
                                    {this.props.lang.firsthome.doc1}
                                </div>
                            </a>
                            <a href="https://tokensale.squeezer.io/docs/token-terms.pdf" target="_blank" className="Firsthome-documents-button">
                                <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/doc-512.png" alt="" />
                                <div>
                                    {this.props.lang.firsthome.doc2}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Firsthome.propTypes = {
    lang: PropTypes.object,
    open: PropTypes.func,
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
    // some action creators
    open: (url) => { console.log(openVideo); dispatch(openVideo(url)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Firsthome);