import React, { Component } from 'react';
import './Endregister.css';
import uptime from './uptime.png';
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Endregister extends Component{

    render(){
        return(
            <div className="footer">
                <div className= "Endregister">
                    <div className="form Endregister-form">
                        <div className="Endregister-left">
                            <h3><strong>{this.props.lang.endregister.head1}</strong></h3>
                            <div className="emailfiller">
                            <input type="email" className="Endregister-input" placeholder="Email" onChange={() =>{}} />
                            <Link className='Endregister-button' to={'/account/login'}><strong>      {this.props.lang.endregister.button}</strong></Link>
                            </div>
                            <p>
                                {this.props.lang.endregister.text1}
                            </p>
                            <img className="" src={uptime} alt=""/>

                        </div>
                        <div className="Endregister-right">
                            <h2><strong>
                                {this.props.lang.endregister.head2}
                                </strong></h2>
                                <br/>
                            <p>
                                {this.props.lang.endregister.text2}
                            </p>
                            <br/>
                            
                            <div className="End-register"><Link className='Endregister-account' to={'/account/login'}><strong>{this.props.lang.endregister.link1}</strong></Link></div>
                            <div className="End-register"><Link className='Endregister-register' to={'/account/register'}><strong>{this.props.lang.endregister.link2}</strong></Link></div>
                        </div>
                    </div>
                </div>
                <div className="footer-text">
                    <div className="form footer-text-form">
                    <div className="footer-text-article"><p>{this.props.lang.endregister.rejecthead}</p></div>
                    <div className="footer-text-item">
                        <p>
                            {this.props.lang.endregister.rejecttext1}
                        </p>
                        <p>
                            {this.props.lang.endregister.rejecttext2}
                        </p>
                    </div>
                    <div className="footer-text-item">
                        <p>
                            {this.props.lang.endregister.rejecttext3}
                        </p>                        
                        <p>
                            {this.props.lang.endregister.rejecttext4}
                        </p>
                    </div>
                </div>    
                </div>
                <div className="footer-links">
                <div className="form footer-form">
                    <div className="footer-links-3">
                    <div className="">{this.props.lang.endregister.footertip1}</div>
                    <div className="">{this.props.lang.endregister.footertip2}</div>
                    <div className="">{this.props.lang.endregister.footertip3}</div>
                    </div>
                    <div className="">{this.props.lang.endregister.footertip4}</div>
                </div>
                </div>
            </div>
        );
    }
}
Endregister.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Endregister);