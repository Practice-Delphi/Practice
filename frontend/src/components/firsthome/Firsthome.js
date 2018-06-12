import React, { Component } from 'react';
import './Firsthome.css';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

import Clock from '../clock/Clock';

class Firsthome extends Component {
  render() {
    return (
    <div className="Firsthome">
        <div className="Firsthome-leftbar">
            <div className="Firsthome-clock">
                <Clock/>
            </div>
            <div className="Firsthome-status-container">
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        {this.props.lang.firsthome.status1}
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        {this.props.lang.firsthome.status2}
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        {this.props.lang.firsthome.status3}
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
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
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="Twiter"/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="Facebook"/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="GitHub"/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="BitCoin Talk"/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="Medium"/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="Telegram"/><span>22k+</span></a>
            </div>
            <div className="Firtshome-videos">
                <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png" alt=""/>

                </div>
                <div>
                    <img src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png" alt=""/>
                </div>
            </div>
            <div className="Firsthome-documents">
                <div>

                    <a href="/" className="Firsthome-documents-button">
                        <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/doc-512.png" alt=""/>
                        <div>
                            {this.props.lang.firsthome.doc1}
                        </div>
                    </a>
                    <a href="/" className="Firsthome-documents-button">
                        <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/doc-512.png" alt=""/>
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
}

const mapStateToProps = state => ({
    // some props
    lang: state.langData,
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Firsthome);