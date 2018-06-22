import React, { Component } from 'react';
import './Token-info.css';
import infoimg2 from './infoimg2.png'
import PropTypes from 'prop-types';

// connect component to redux
import { connect } from 'react-redux';

class Tokeninfo extends Component{
    render(){
        return(
            <div className= "Tokeninfo">
                <div className="form info-form">
                    <h2>
                        {this.props.lang.tokeninfo.head}
                    </h2>
                    <div className="info-elements">
                        <div className="first">
                            <strong>{this.props.lang.tokeninfo.infoelementfirstTicker}</strong> SQR<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementfirstPrice}</strong> 1 SQR = $0.20<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementfirstSoftcap}</strong> <br/>
                                    9,375,000 SQR<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementfirstHardcap}</strong> <br/>
                                    75,000,000 SQR<br/>
                        </div>
                        <div className="second">
                            <strong>{this.props.lang.tokeninfo.infoelementsecondPresale}</strong> <br/>
                                    {this.props.lang.tokeninfo.infoelementsecondPresaletext}<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementsecondTarget} </strong> 11,250,000 SQR<br/>
                        </div>
                        <div className="third">
                            <strong> {this.props.lang.tokeninfo.infoelementthirdTokensale}</strong><br/>
                                     {this.props.lang.tokeninfo.infoelementthirdTokensaletext}<br/>
                            <strong> {this.props.lang.tokeninfo.infoelementthirdTarget}</strong>63,750,000 SQR<br/>
                        </div>
                        <div className="four">
                            <strong>{this.props.lang.tokeninfo.infoelementthirdCompatibility}</strong> Ethereum ERC20<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementthirdUsage}</strong> {this.props.lang.tokeninfo.infoelementthirdUsagetext}<br/>
                            <strong>{this.props.lang.tokeninfo.infoelementthirdTokendeliverydate}</strong> {this.props.lang.tokeninfo.infoelementthirdTokendeliverydatetext}
                        </div>
                    </div>
                    <div className="distribution">
                        <h1><strong>{this.props.lang.tokeninfo.distributionhead}</strong></h1>
                            <div className="">
                                <div>
                                    <div>    
                                        <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                                    </div>
                                    <div>
                                    <strong>{this.props.lang.tokeninfo.distribution1article}</strong><br/>
                                    {this.props.lang.tokeninfo.distribution1text}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                                    </div>
                                    <div>
                                    <strong>{this.props.lang.tokeninfo.distribution2article}</strong><br/>
                                        {this.props.lang.tokeninfo.distribution2text}
                                    </div>
                                </div>
                                <div>    
                                    <div>
                                        <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                                    </div>
                                    <div>
                                    <strong>{this.props.lang.tokeninfo.distribution3article}  </strong><br/>
                                        {this.props.lang.tokeninfo.distribution3text}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                                    </div>
                                    <div>
                                    <strong>{this.props.lang.tokeninfo.distribution4article}  </strong><br/>
                                        {this.props.lang.tokeninfo.distribution4text}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                                    </div>
                                    <div>
                                    <strong>{this.props.lang.tokeninfo.distribution5article} </strong><br/>
                                        {this.props.lang.tokeninfo.distribution5text}
                                    </div>
                                </div>
                        </div>  
                        <div className="info-img">
                            <div>187,500,000<br />
                                 SQR
                            </div>
                        </div>  
                    </div>
                    <div className="income">
                        <h2><strong>{this.props.lang.tokeninfo.incomehead}</strong></h2>
                        <div>
                            <div >
                                <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                            </div>
                            <div>
                            {this.props.lang.tokeninfo.incometext1} <strong>45%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                            </div>
                            <div>
                            {this.props.lang.tokeninfo.incometext2}<strong> 30%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                            </div>
                            <div>
                            {this.props.lang.tokeninfo.incometext3} <strong> 10%</strong>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                            </div>
                            <div>
                            {this.props.lang.tokeninfo.incometext4} <strong> 8%</strong>
                            </div>
                        </div>
                        <div>                            
                            <div>
                                <img className="dot" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Reddot.svg/1024px-Reddot.svg.png" alt=""/> 
                            </div>
                            <div>
                            {this.props.lang.tokeninfo.incometext5}<strong> 7%</strong>
                            </div>
                        </div>
                        <img className="info-img-line" src={infoimg2} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
Tokeninfo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Tokeninfo);