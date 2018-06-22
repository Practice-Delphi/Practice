import React, { Component } from 'react';
import './Smart.css';
import smart1 from './smart.png';
import smart2 from './smart1.png';
import smart3 from './smart3.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Smart extends Component{
    render(){
        return(
            <div className= "Smart ">
                <div className="form smart-form">
                    <div className="smart-left">
                        <h1><strong>{this.props.lang.smart.artikle}</strong></h1>
                        Development by <a className="smart-left-link" href="https://ambisafe.com/" title="Squeezer on ICobench" target="_blank"  rel='noopener noreferrer'>Ambisafe</a>
                    </div>
                    <div className="smart-center">
                        <div className="git-link" >
                            
                            <div className="git-img">
                                <a href="https://github.com/SqueezerIO/squeezer-token-smartcontract" title="to git" target="_blank"  rel='noopener noreferrer'><img src={smart2} alt=""/></a>
                            </div>
                            <div className="text-link">
                                <a href="https://github.com/SqueezerIO/squeezer-token-smartcontract" title="to git" target="_blank"  rel='noopener noreferrer'> {this.props.lang.smart.link1}</a>
                            </div>
                        
                        </div>
                        <div className="git-link" >
                            
                            <div className="git-img">
                                <a href="https://etherscan.io/address/0x6e7c9606ac5bcc0123ee97f8399e6f28aafb70e0" title="to git" target="_blank"  rel='noopener noreferrer'><img src={smart3} alt=""/></a>
                            </div>
                            <div className="text-link">
                                <a href="https://etherscan.io/address/0x6e7c9606ac5bcc0123ee97f8399e6f28aafb70e0" title="to git" target="_blank"  rel='noopener noreferrer'> {this.props.lang.smart.link2}</a>
                            </div>
                       
                        </div>
                    </div>
                    <div className="smart-right">
                        <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git" target="_blank"  rel='noopener noreferrer'><img className="smart-img" src={smart1} alt=""/></a>
                    </div>
                </div>
            </div>
        );
    }
}
Smart.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Smart);