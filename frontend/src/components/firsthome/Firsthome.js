import React, { Component } from 'react';
import './Firsthome.css';

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
                        Status 1
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        Status 2
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        Status 3
                    </div>
                </div>
                <div className="Firsthome-status">
                    <div className="Firsthome-status-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/>
                    </div>
                    <div className="Firsthome-status-title">
                        Status 4
                    </div>
                </div>
            </div>
        </div>
        <div className="Firsthome-rightbar">
            <div className="Firsthome-rightbartitle">
                <h1>Firts Title</h1>
                <h2>Second Title</h2>
            </div>
            <div className="Firtshome-links">
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/></a>
                <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt=""/><span>22k+</span></a>
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
                            Document 1
                        </div>
                    </a>
                    <a href="/" className="Firsthome-documents-button">
                        <img src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/doc-512.png" alt=""/>
                        <div>
                            Document 2
                        </div>
                    </a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Firsthome);