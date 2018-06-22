import React, { Component } from 'react';
import './Connector.css';
import con1 from './con1.png';
import con2 from './con2.png';
import smart1 from './smart1.png';
import { openVideo } from '../../actions/videoaction';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Connector extends Component{
    render(){
        return(
            <div className= "Connector">
                <div className="form">
                    <div className="left">
                        <div className="left-text">
                            <strong>{this.props.lang.connector.artikle}</strong>
                        </div>
                        <div onClick={() => { this.props.open("https://www.youtube.com/embed/vobY-Fj6z0I") }}>
                            <img src={con2} className="left-video" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        {this.props.lang.connector.text}
                        <div className="connection-exeple">
                            <img className="" src={con1} alt=""/>
                        </div>
                        <div className="git-link" >
                            
                                <div className="git-img">
                                    <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"><img className="" src={smart1} alt=""/></a>
                                </div>
                                <div className="text-link">
                                    <a href="https://i.pinimg.com/originals/0b/e5/40/0be540433c15a6f783fd06e91cb02c96.jpg" title="to git"> {this.props.lang.connector.link}</a>
                                </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Connector.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Connector);