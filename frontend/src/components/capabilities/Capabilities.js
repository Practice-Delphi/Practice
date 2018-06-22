import React, { Component } from 'react';
import './Capabilities.css';
import capa1 from './capa1.png';
import capa2 from './capa2.png';
import capa3 from './capa3.png';
import capa4 from './capa4.png';
import capa5 from './capa5.png';
import capa6 from './capa6.png';
import capa7 from './capa7.png';
import capa8 from './capa8.png';
import capa9 from './capa9.png';
import capa10 from './capa10.png';
import capa11 from './capa11.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Capabilities extends Component {
    render() {
        return (
            <div className="Capabilities">
                <div className="form ">
                    <div className="main">
                        <div className="main-text">
                            <div className="text">
                                <h1>
                                    <strong>
                                        {this.props.lang.capabilities.maintexthead}
                                    </strong>
                                </h1>
                                <p>
                                    {this.props.lang.capabilities.maintext}
                                </p>
                            </div>
                            <div className="main-text-symbols">
                                <div className="text-symbol"> 
                                    <img className="" src={ capa2 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa3 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa4 } alt=""/>
                                </div>
                                <div className="text-symbol"> 
                                    <img className="" src={ capa5 } alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="main-picture">                            
                                <img className="" src={capa1} alt=""/>
                        </div>
                    </div>
                    <div className="secondary">
                      <div className="administration tip">
                            <div className="symbol"> 
                                <img className="" src={capa6} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip1head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip1text}
                            </p>
                      </div>
                      <div className="resize tip">
                            <div className="symbol"> 
                                <img className="" src={capa7} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip2head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip2text}
                            </p>
                      </div>
                      <div className="payment tip">
                            <div className="symbol"> 
                                <img className="" src={capa8} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip3head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip3text}
                            </p>
                      </div>
                      <div className="conditions tip">
                            <div className="symbol"> 
                                <img className="" src={capa9} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip4head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip4text}
                            </p>
                      </div>
                      <div className="block tip">
                             <div className="symbol"> 
                                <img className="" src={capa10} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip5head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip5text}
                            </p>
                      </div>
                      <div className="token tip">
                            <div className="symbol"> 
                                <img className="" src={capa11} alt=""/>
                            </div>
                            <strong>{this.props.lang.capabilities.tip6head}</strong>
                            <p>
                                {this.props.lang.capabilities.tip6text}
                            </p>
                      </div>
                    </div>
                </div>
            </div>

        );
    }
}
Capabilities.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Capabilities);