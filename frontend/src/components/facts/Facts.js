import React, { Component } from 'react';
import './Facts.css';
import facts1 from './facts1.png';
import facts2 from './facts2.png';
import facts3 from './facts3.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Facts extends Component{
    render(){
        return(
            <div className= "Facts">
                <div className="form">
                    <div className="fact-item">
                        <div >
                            <div className="Facts-symbol1">
                                <img className="" src={facts1} alt=""/> 
                            </div>
                            <div className="text-item">
                                <strong>
                                    {this.props.lang.facts.fact1articl}
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                01
                            </div>
                            <div className="text-item">
                                {this.props.lang.facts.fact1text}
                            </div>
                        </div>
                    </div>
                    <div className="fact-item">
                        <div>
                            <div className="Facts-symbol">
                                <img className="" src={facts2} alt=""/> 
                            </div>
                            <div className="text-item">
                            <strong>
                                {this.props.lang.facts.fact2articl}
                            </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                02
                            </div>
                            <div className="text-item">
                                {this.props.lang.facts.fact2text}
                            </div>
                        </div>
                    </div>
                    <div className="fact-item1">
                        <div>
                            <div className="Facts-symbol">
                                <img className="" src={facts3} alt=""/> 
                            </div>
                            <div className="text-item">
                                <strong>
                                    {this.props.lang.facts.fact3articl}
                                </strong>
                            </div>
                        </div>
                        <div>
                            <div className="facts-symbol"> 
                                03
                            </div>
                            <div className="text-item">
                                {this.props.lang.facts.fact3text}
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        );
    }
}
Facts.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Facts);